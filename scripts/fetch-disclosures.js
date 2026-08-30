/**
 * scripts/fetch-disclosures.js
 * -----------------------------------------------------------------------
 * corp-codes.json에 있는 각 기업에 대해 DART 공시검색(list.json) API를
 * 호출하여, 최근 공시 중 "공급계약/판매계약" 관련 키워드가 포함된
 * 보고서를 걸러내 disclosures.json에 저장합니다.
 *
 * 참고: DART Open API는 계약상대방·금액 같은 세부 항목을 구조화된
 * 필드로 제공하지 않습니다(보고서 제목·접수일·원문 링크까지만 제공).
 * 그래서 이 스크립트는 "새로운 공급계약 공시가 떴다"를 감지해서
 * 원문 링크로 연결해주는 용도로 설계되어 있습니다. 세부 계약 내용은
 * 사이트에서 자동 추정하지 말고, 사용자가 원문 링크를 눌러 직접
 * 확인하도록 안내하세요(투자정보 정확성을 위해 중요합니다).
 *
 * 사용법:
 *   DART_API_KEY=발급받은인증키 node scripts/fetch-disclosures.js
 *
 * GitHub Actions에서는 secrets.DART_API_KEY로 자동 주입됩니다.
 * -----------------------------------------------------------------------
 */

const fs = require("fs");
const path = require("path");

const API_KEY = process.env.DART_API_KEY;
const ROOT = path.resolve(__dirname, "..");
const LOOKBACK_DAYS = 90; // 최근 90일치 공시를 조회 (필요시 조정)
const KEYWORDS = ["단일판매", "공급계약", "판매ㆍ공급계약", "판매·공급계약", "공급협약", "양해각서"];

function ymd(date) {
  return date.toISOString().slice(0, 10).replace(/-/g, "");
}

async function fetchAllPages(corp_code, bgn_de, end_de) {
  const results = [];
  let page = 1;
  while (true) {
    const url = new URL("https://opendart.fss.or.kr/api/list.json");
    url.searchParams.set("crtfc_key", API_KEY);
    url.searchParams.set("corp_code", corp_code);
    url.searchParams.set("bgn_de", bgn_de);
    url.searchParams.set("end_de", end_de);
    url.searchParams.set("page_no", String(page));
    url.searchParams.set("page_count", "100");
    url.searchParams.set("sort", "date");
    url.searchParams.set("sort_mth", "desc");

    const res = await fetch(url);
    const json = await res.json();

    // status "013" = 조회된 데이터가 없음 (정상적인 빈 결과)
    if (json.status === "013") break;
    if (json.status !== "000") {
      console.warn(`  ⚠️ corp_code=${corp_code} 응답 오류: ${json.status} ${json.message}`);
      break;
    }

    results.push(...(json.list || []));
    if (page >= (json.total_page || 1)) break;
    page += 1;
  }
  return results;
}

async function main() {
  if (!API_KEY) {
    console.error("환경변수 DART_API_KEY가 설정되어 있지 않습니다.");
    process.exit(1);
  }

  const corpCodesPath = path.join(ROOT, "corp-codes.json");
  if (!fs.existsSync(corpCodesPath)) {
    console.error("corp-codes.json이 없습니다. 먼저 `npm run lookup-corp-codes`를 실행하세요.");
    process.exit(1);
  }
  const corpCodes = JSON.parse(fs.readFileSync(corpCodesPath, "utf-8"));
  const tracked = JSON.parse(fs.readFileSync(path.join(ROOT, "tracked-companies.json"), "utf-8"));

  const end = new Date();
  const begin = new Date(end.getTime() - LOOKBACK_DAYS * 24 * 60 * 60 * 1000);
  const bgn_de = ymd(begin);
  const end_de = ymd(end);

  const disclosures = [];

  for (const company of tracked) {
    for (const stockCode of company.stockCodes) {
      const entry = corpCodes[stockCode];
      if (!entry) {
        console.warn(`⚠️  ${company.name}(${stockCode})의 corp_code가 없습니다. lookup-corp-codes를 먼저 실행하세요.`);
        continue;
      }

      console.log(`조회 중: ${company.name} (${stockCode} / ${entry.corp_code})`);
      const list = await fetchAllPages(entry.corp_code, bgn_de, end_de);

      const filtered = list.filter((item) =>
        KEYWORDS.some((kw) => (item.report_nm || "").includes(kw))
      );

      for (const item of filtered) {
        disclosures.push({
          companyId: company.id,
          companyName: company.name,
          stockCode,
          reportName: item.report_nm,
          filerName: item.flr_nm,
          receiptDate: item.rcept_dt,
          receiptNo: item.rcept_no,
          url: `https://dart.fss.or.kr/dsaf001/main.do?rcpNo=${item.rcept_no}`,
        });
      }
    }
  }

  // 최신순 정렬 + 중복 제거(receiptNo 기준)
  const dedup = Array.from(new Map(disclosures.map((d) => [d.receiptNo, d])).values());
  dedup.sort((a, b) => (a.receiptDate < b.receiptDate ? 1 : -1));

  const output = {
    generatedAt: new Date().toISOString(),
    lookbackDays: LOOKBACK_DAYS,
    keywords: KEYWORDS,
    items: dedup,
  };

  fs.writeFileSync(
    path.join(ROOT, "disclosures.json"),
    JSON.stringify(output, null, 2) + "\n",
    "utf-8"
  );

  console.log(`완료: disclosures.json에 공급계약 관련 공시 ${dedup.length}건 저장했습니다.`);
}

main().catch((err) => {
  console.error("오류:", err.message);
  process.exit(1);
});
