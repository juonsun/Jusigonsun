/**
 * scripts/lookup-corp-codes.js
 * -----------------------------------------------------------------------
 * DART Open API는 "고유번호(corp_code)"라는 자체 회사 ID로 조회합니다.
 * 이 스크립트는 DART가 제공하는 전체 상장사 고유번호 목록(ZIP 안의 XML)을
 * 내려받아, tracked-companies.json에 등록된 종목코드(stock_code)와 매칭되는
 * 회사만 골라 corp-codes.json 파일로 저장합니다.
 *
 * 한 번만 실행하면 되고, 추적할 기업 목록(tracked-companies.json)이
 * 바뀔 때만 다시 실행하면 됩니다.
 *
 * 사용법:
 *   DART_API_KEY=발급받은인증키 node scripts/lookup-corp-codes.js
 *
 * 사전 준비:
 *   npm install   (package.json의 adm-zip, fast-xml-parser 설치)
 * -----------------------------------------------------------------------
 */

const fs = require("fs");
const path = require("path");
const AdmZip = require("adm-zip");
const { XMLParser } = require("fast-xml-parser");

const API_KEY = process.env.DART_API_KEY;
const ROOT = path.resolve(__dirname, "..");

async function main() {
  if (!API_KEY) {
    console.error("환경변수 DART_API_KEY가 설정되어 있지 않습니다.");
    console.error('사용법: DART_API_KEY="발급받은키" node scripts/lookup-corp-codes.js');
    process.exit(1);
  }

  const tracked = JSON.parse(fs.readFileSync(path.join(ROOT, "tracked-companies.json"), "utf-8"));
  const wantedCodes = new Set(tracked.flatMap((c) => c.stockCodes));

  console.log(`DART 고유번호 목록 다운로드 중... (추적 대상 종목코드 ${wantedCodes.size}개)`);

  const url = `https://opendart.fss.or.kr/api/corpCode.xml?crtfc_key=${API_KEY}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`DART API 요청 실패: HTTP ${res.status}`);
  }
  const buf = Buffer.from(await res.arrayBuffer());

  // 응답이 정상이면 ZIP 바이너리, 에러면 JSON/텍스트 메시지가 옵니다.
  let zip;
  try {
    zip = new AdmZip(buf);
  } catch (e) {
    throw new Error(
      "ZIP 압축 해제에 실패했습니다. 인증키가 올바른지, 또는 DART에서 에러 메시지를 반환하지 않았는지 확인하세요.\n" +
      "응답 내용: " + buf.toString("utf-8").slice(0, 500)
    );
  }

  const entry = zip.getEntries().find((e) => e.entryName.toUpperCase().endsWith("CORPCODE.XML"));
  if (!entry) throw new Error("ZIP 안에서 CORPCODE.XML을 찾지 못했습니다.");

  const xml = entry.getData().toString("utf-8");
  // parseTagValue: false — 그렇지 않으면 "005930" 같은 값이 숫자로 변환되면서
  // 앞자리 0이 사라져(5930) 종목코드 매칭이 깨집니다. 항상 문자열로 유지합니다.
  const parser = new XMLParser({ parseTagValue: false });
  const parsed = parser.parse(xml);
  const list = parsed?.result?.list || [];

  const matched = {};
  for (const item of list) {
    const stockCode = (item.stock_code || "").toString().trim();
    if (stockCode && wantedCodes.has(stockCode)) {
      matched[stockCode] = {
        corp_code: item.corp_code,
        corp_name: item.corp_name,
      };
    }
  }

  const missing = [...wantedCodes].filter((code) => !matched[code]);
  if (missing.length) {
    console.warn("⚠️  다음 종목코드는 매칭되지 않았습니다:", missing.join(", "));
  }

  fs.writeFileSync(
    path.join(ROOT, "corp-codes.json"),
    JSON.stringify(matched, null, 2) + "\n",
    "utf-8"
  );

  console.log(`완료: corp-codes.json에 ${Object.keys(matched).length}개 기업 매핑을 저장했습니다.`);
}

main().catch((err) => {
  console.error("오류:", err.message);
  process.exit(1);
});
