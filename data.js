/* ===================================================================
   공급망지도 (SupplyMap) — 데이터 파일
   국내 주요 대기업 및 글로벌 대기업(애플·테슬라)의 협력사/공급망 정보.
   각 항목에는 출처(source)를 표기했습니다. 실제 투자 판단 전에는
   반드시 전자공시시스템(DART), 각 사 IR 자료 등 1차 출처를 확인하세요.
   =================================================================== */

const SUPPLY_CHAIN_DATA = {
  updatedAt: "2026-08-17",
  categories: {
    "계열사":   { slot: 4, desc: "동일 그룹 내 계열사로부터의 조달" },
    "소재":     { slot: 1, desc: "원재료·화학소재·부품 원료" },
    "부품":     { slot: 2, desc: "완제품에 들어가는 개별 부품·모듈" },
    "장비":     { slot: 3, desc: "생산·공정에 사용되는 제조·검사 장비" },
    "완성품":   { slot: 5, desc: "타사에 공급되는 반제품·완성 모듈" },
    "서비스":   { slot: 6, desc: "물류·엔지니어링 등 서비스 공급" }
  },

  companies: [
    {
      id: "005930",
      name: "삼성전자",
      ticker: "005930",
      dartStockCodes: ["005930"],
      market: "KOSPI",
      type: "domestic",
      sector: "반도체·전자",
      oneLiner: "메모리·시스템반도체, 스마트폰, 가전을 아우르는 국내 최대 제조업체",
      note: "매년 공정거래위원회·지속가능경영보고서를 통해 협력회사 현황을 일부 공개합니다. 거래 비중 80% 이상이며 공개에 동의한 기업 위주로만 알려져 있어 실제 협력사는 더 많습니다.",
      suppliers: [
        { name: "삼성디스플레이", ticker: null, category: "계열사", item: "OLED·LCD 디스플레이 패널",
          source: { title: "삼성전자 협력업체 리스트 - 캐드앤그래픽스", url: "https://www.cadgraphics.co.kr/newsview.php?pages=&sub=lecture03&catecode=9&num=70215" } },
        { name: "삼성전기", ticker: "009150", category: "계열사", item: "인쇄회로기판(PCB), MLCC",
          source: { title: "삼성전자 협력업체 리스트 - 캐드앤그래픽스", url: "https://www.cadgraphics.co.kr/newsview.php?pages=&sub=lecture03&catecode=9&num=70215" } },
        { name: "삼성SDI", ticker: "006400", category: "계열사", item: "배터리(모바일·ESS용)",
          source: { title: "삼성전자 협력업체 리스트 - 캐드앤그래픽스", url: "https://www.cadgraphics.co.kr/newsview.php?pages=&sub=lecture03&catecode=9&num=70215" } },
        { name: "동진쎄미켐", ticker: "005290", category: "소재", item: "포토레지스트 등 반도체 공정 소재",
          source: { title: "삼성전자 협력업체 리스트 - 캐드앤그래픽스", url: "https://www.cadgraphics.co.kr/newsview.php?pages=&sub=lecture03&catecode=9&num=70215" } },
        { name: "솔브레인", ticker: "357780", category: "소재", item: "식각액(에천트) 등 반도체 소재",
          source: { title: "삼성전자 협력업체 리스트 - 캐드앤그래픽스", url: "https://www.cadgraphics.co.kr/newsview.php?pages=&sub=lecture03&catecode=9&num=70215" } },
        { name: "원익IPS", ticker: "240810", category: "장비", item: "반도체 증착·식각 장비",
          source: { title: "삼성전자 협력업체 리스트 - 캐드앤그래픽스", url: "https://www.cadgraphics.co.kr/newsview.php?pages=&sub=lecture03&catecode=9&num=70215" } },
        { name: "테스", ticker: "095610", category: "장비", item: "반도체 제조 장비",
          source: { title: "삼성전자 협력업체 리스트 - 캐드앤그래픽스", url: "https://www.cadgraphics.co.kr/newsview.php?pages=&sub=lecture03&catecode=9&num=70215" } }
      ]
    },
    {
      id: "000660",
      name: "SK하이닉스",
      ticker: "000660",
      dartStockCodes: ["000660"],
      market: "KOSPI",
      type: "domestic",
      sector: "반도체(메모리·HBM)",
      oneLiner: "HBM(고대역폭메모리) 시장을 주도하는 국내 2위 반도체 기업",
      note: "HBM 생산 확대에 따라 후공정 장비·소부장 협력사와의 공동 기술개발 및 지원 프로그램을 확대하고 있습니다.",
      suppliers: [
        { name: "한미반도체", ticker: "042700", category: "장비", item: "HBM용 TC 본더(열압착 본더)",
          source: { title: "SK하이닉스 부품 납품하는 국내 업체 명단 총정리", url: "https://www.infogoodman.com/2026/04/sk-hynix-korea-suppliers-list.html" } },
        { name: "한화세미텍", ticker: null, category: "장비", item: "TC 본더, 하이브리드 본더",
          source: { title: "SK하이닉스 부품 납품하는 국내 업체 명단 총정리", url: "https://www.infogoodman.com/2026/04/sk-hynix-korea-suppliers-list.html" } },
        { name: "제너셈", ticker: "219550", category: "장비", item: "HBM 관련 후공정 장비",
          source: { title: "SK하이닉스 부품 납품하는 국내 업체 명단 총정리", url: "https://www.infogoodman.com/2026/04/sk-hynix-korea-suppliers-list.html" } },
        { name: "유진테크", ticker: "084370", category: "장비", item: "박막 증착 장비",
          source: { title: "SK하이닉스 부품 납품하는 국내 업체 명단 총정리", url: "https://www.infogoodman.com/2026/04/sk-hynix-korea-suppliers-list.html" } },
        { name: "미래산업", ticker: "025560", category: "장비", item: "반도체 검사 장비",
          source: { title: "SK하이닉스 부품 납품하는 국내 업체 명단 총정리", url: "https://www.infogoodman.com/2026/04/sk-hynix-korea-suppliers-list.html" } },
        { name: "디아이", ticker: "003160", category: "장비", item: "HBM4 웨이퍼 테스터",
          source: { title: "SK하이닉스 부품 납품하는 국내 업체 명단 총정리", url: "https://www.infogoodman.com/2026/04/sk-hynix-korea-suppliers-list.html" } },
        { name: "아이에스티이", ticker: "258610", category: "장비", item: "반도체 자동화 장비",
          source: { title: "SK하이닉스 부품 납품하는 국내 업체 명단 총정리", url: "https://www.infogoodman.com/2026/04/sk-hynix-korea-suppliers-list.html" } },
        { name: "SK실트론", ticker: null, category: "계열사", item: "실리콘 웨이퍼",
          source: { title: "SK하이닉스 부품 납품하는 국내 업체 명단 총정리", url: "https://www.infogoodman.com/2026/04/sk-hynix-korea-suppliers-list.html" } }
      ]
    },
    {
      id: "005380",
      name: "현대자동차·기아",
      ticker: "005380 / 000270",
      dartStockCodes: ["005380", "000270"],
      market: "KOSPI",
      type: "domestic",
      sector: "완성차",
      oneLiner: "현대차그룹의 양대 완성차 브랜드, 국내 최대 부품 협력사 생태계(HKMC) 보유",
      note: "1차 협력사만 수백 곳에 달하며, 현대모비스·현대위아 등 계열 부품사와 외국계·국내 전문 부품사가 함께 공급망을 구성합니다.",
      suppliers: [
        { name: "현대모비스", ticker: "012330", category: "계열사", item: "모듈시스템, ESP, 에어백",
          source: { title: "주요 현대/기아자동차 1차협력업체 리스트 - 캐드앤그래픽스", url: "https://www.cadgraphics.co.kr/newsview.php?pages=directory&sub=directory08&catecode=41&num=53545" } },
        { name: "현대위아", ticker: "011210", category: "부품", item: "트랜스미션, 액슬",
          source: { title: "주요 현대/기아자동차 1차협력업체 리스트 - 캐드앤그래픽스", url: "https://www.cadgraphics.co.kr/newsview.php?pages=directory&sub=directory08&catecode=41&num=53545" } },
        { name: "케피코", ticker: null, category: "부품", item: "엔진 전자부품(ECU, 센서류)",
          source: { title: "주요 현대/기아자동차 1차협력업체 리스트 - 캐드앤그래픽스", url: "https://www.cadgraphics.co.kr/newsview.php?pages=directory&sub=directory08&catecode=41&num=53545" } },
        { name: "만도", ticker: "204320", category: "부품", item: "브레이크·조향·현가 섀시부품",
          source: { title: "주요 현대/기아자동차 1차협력업체 리스트 - 캐드앤그래픽스", url: "https://www.cadgraphics.co.kr/newsview.php?pages=directory&sub=directory08&catecode=41&num=53545" } },
        { name: "한국로버트보쉬기전", ticker: null, category: "부품", item: "ABS·TCS·ESP 안전장치, 엔진부품",
          source: { title: "주요 현대/기아자동차 1차협력업체 리스트 - 캐드앤그래픽스", url: "https://www.cadgraphics.co.kr/newsview.php?pages=directory&sub=directory08&catecode=41&num=53545" } },
        { name: "한온시스템", ticker: "018880", category: "부품", item: "에어컨·히터 등 공조 시스템",
          source: { title: "주요 현대/기아자동차 1차협력업체 리스트 - 캐드앤그래픽스", url: "https://www.cadgraphics.co.kr/newsview.php?pages=directory&sub=directory08&catecode=41&num=53545" } },
        { name: "세종공업", ticker: "033530", category: "부품", item: "배기계 부품",
          source: { title: "주요 현대/기아자동차 1차협력업체 리스트 - 캐드앤그래픽스", url: "https://www.cadgraphics.co.kr/newsview.php?pages=directory&sub=directory08&catecode=41&num=53545" } },
        { name: "한국타이어앤테크놀로지", ticker: "161390", category: "부품", item: "타이어",
          source: { title: "주요 현대/기아자동차 1차협력업체 리스트 - 캐드앤그래픽스", url: "https://www.cadgraphics.co.kr/newsview.php?pages=directory&sub=directory08&catecode=41&num=53545" } }
      ]
    },
    {
      id: "373220",
      name: "LG에너지솔루션",
      ticker: "373220",
      dartStockCodes: ["373220"],
      market: "KOSPI",
      type: "domestic",
      sector: "이차전지(배터리)",
      oneLiner: "국내 1위 전기차·ESS 배터리 셀 제조사",
      note: "공개된 협력사만 한국 40곳, 중국 33곳 규모로, 한국 기업은 공정 장비·부품, 중국 기업은 원가 경쟁력이 필요한 소재 영역에 강점을 보입니다.",
      suppliers: [
        { name: "엘앤에프", ticker: "066970", category: "소재", item: "양극재",
          source: { title: "LG에너지솔루션 배터리 협력사 해외 비중 늘었다 - 디일렉", url: "https://www.thelec.kr/news/articleView.html?idxno=51725" } },
        { name: "포스코퓨처엠", ticker: "003670", category: "소재", item: "양극재·음극재",
          source: { title: "LG에너지솔루션 배터리 협력사 해외 비중 늘었다 - 디일렉", url: "https://www.thelec.kr/news/articleView.html?idxno=51725" } },
        { name: "솔브레인", ticker: "357780", category: "소재", item: "전해액",
          source: { title: "LG에너지솔루션 배터리 협력사 해외 비중 늘었다 - 디일렉", url: "https://www.thelec.kr/news/articleView.html?idxno=51725" } },
        { name: "솔루스첨단소재", ticker: "336370", category: "소재", item: "동박",
          source: { title: "LG에너지솔루션 배터리 협력사 해외 비중 늘었다 - 디일렉", url: "https://www.thelec.kr/news/articleView.html?idxno=51725" } },
        { name: "롯데에너지머티리얼즈", ticker: "020150", category: "소재", item: "동박",
          source: { title: "LG에너지솔루션 배터리 협력사 해외 비중 늘었다 - 디일렉", url: "https://www.thelec.kr/news/articleView.html?idxno=51725" } },
        { name: "씨아이에스", ticker: "222080", category: "장비", item: "배터리 공정 장비",
          source: { title: "LG에너지솔루션 배터리 협력사 해외 비중 늘었다 - 디일렉", url: "https://www.thelec.kr/news/articleView.html?idxno=51725" } },
        { name: "에이프로", ticker: "262260", category: "장비", item: "배터리 공정(활성화) 장비",
          source: { title: "LG에너지솔루션 배터리 협력사 해외 비중 늘었다 - 디일렉", url: "https://www.thelec.kr/news/articleView.html?idxno=51725" } },
        { name: "코윈테크", ticker: "282880", category: "장비", item: "배터리 공정 자동화 장비",
          source: { title: "LG에너지솔루션 배터리 협력사 해외 비중 늘었다 - 디일렉", url: "https://www.thelec.kr/news/articleView.html?idxno=51725" } },
        { name: "율촌화학", ticker: "008730", category: "부품", item: "파우치 필름",
          source: { title: "LG에너지솔루션 배터리 협력사 해외 비중 늘었다 - 디일렉", url: "https://www.thelec.kr/news/articleView.html?idxno=51725" } },
        { name: "LS일렉트릭", ticker: "010120", category: "부품", item: "PCS 및 에너지관리시스템",
          source: { title: "LG에너지솔루션 배터리 협력사 해외 비중 늘었다 - 디일렉", url: "https://www.thelec.kr/news/articleView.html?idxno=51725" } }
      ]
    },
    {
      id: "006400",
      name: "삼성SDI",
      ticker: "006400",
      dartStockCodes: ["006400"],
      market: "KOSPI",
      type: "domestic",
      sector: "이차전지(배터리)",
      oneLiner: "전기차·ESS·소형 배터리를 생산하는 삼성그룹 배터리 계열사",
      note: "각형·원통형 배터리 중심의 라인업으로, 소재 협력사와의 장기 공급계약을 통해 원료를 안정적으로 확보하고 있습니다.",
      suppliers: [
        { name: "에코프로비엠", ticker: "247540", category: "소재", item: "양극재 (5년간 약 44조원 규모 장기공급계약)",
          source: { title: "에코프로비엠, 삼성SDI에 44조원 양극재 공급 계약 체결 - 뉴스핌", url: "https://www.newspim.com/news/view/20231204000050" } }
      ]
    },
    {
      id: "005490",
      name: "POSCO홀딩스",
      ticker: "005490",
      dartStockCodes: ["005490"],
      market: "KOSPI",
      type: "domestic",
      sector: "철강·이차전지소재",
      oneLiner: "철강을 모태로 이차전지 소재·리튬 사업까지 확장한 지주회사",
      note: "다른 기업들과 달리 외부 협력사보다 그룹 내 계열사(밸류체인)를 통해 원료→소재→완제품을 수직계열화하는 구조가 특징입니다.",
      suppliers: [
        { name: "포스코퓨처엠", ticker: "003670", category: "계열사", item: "이차전지 양극재·음극재 소재 계열사",
          source: { title: "이차전지소재 - 사업분야 - 포스코퓨처엠", url: "https://www.poscofuturem.com/business/energy.do" } },
        { name: "포스코인터내셔널", ticker: "047050", category: "계열사", item: "철강·에너지 원료 트레이딩",
          source: { title: "그룹사 - 네트워크 - 회사소개 - POSCO", url: "https://www.posco.co.kr/homepage/docs/kor7/jsp/company/family/s91pf100010c.jsp" } }
      ]
    }
  ],

  globalBuyers: [
    {
      id: "AAPL",
      name: "애플 (Apple)",
      ticker: "AAPL",
      market: "NASDAQ",
      type: "global",
      sector: "스마트폰·전자기기",
      oneLiner: "아이폰에 들어가는 메모리·디스플레이·카메라모듈 등 핵심 부품을 다수의 한국 기업으로부터 공급받습니다.",
      note: "애플이 매년 공개하는 공급업체 명단(Supplier List)과 국내 보도를 종합한 자료로, 실제 공식 명단은 애플 홈페이지에서 확인할 수 있습니다.",
      suppliers: [
        { name: "삼성전자", ticker: "005930", category: "부품", item: "메모리 칩(D램·낸드)",
          source: { title: "애플 아이폰, 국내 부품협력사는 어디? - 디일렉", url: "https://www.thelec.kr/news/articleView.html?idxno=18488" } },
        { name: "SK하이닉스", ticker: "000660", category: "부품", item: "메모리 칩",
          source: { title: "애플 아이폰, 국내 부품협력사는 어디? - 디일렉", url: "https://www.thelec.kr/news/articleView.html?idxno=18488" } },
        { name: "삼성디스플레이", ticker: null, category: "부품", item: "OLED 디스플레이",
          source: { title: "애플 아이폰, 국내 부품협력사는 어디? - 디일렉", url: "https://www.thelec.kr/news/articleView.html?idxno=18488" } },
        { name: "LG디스플레이", ticker: "034220", category: "부품", item: "OLED 디스플레이",
          source: { title: "애플 아이폰, 국내 부품협력사는 어디? - 디일렉", url: "https://www.thelec.kr/news/articleView.html?idxno=18488" } },
        { name: "LX세미콘", ticker: "108320", category: "부품", item: "디스플레이 드라이버 IC(DDI)",
          source: { title: "애플 아이폰, 국내 부품협력사는 어디? - 디일렉", url: "https://www.thelec.kr/news/articleView.html?idxno=18488" } },
        { name: "LG이노텍", ticker: "011070", category: "부품", item: "카메라 모듈(후면·전면), 3D ToF 모듈",
          source: { title: "애플 아이폰, 국내 부품협력사는 어디? - 디일렉", url: "https://www.thelec.kr/news/articleView.html?idxno=18488" } },
        { name: "삼성전기", ticker: "009150", category: "부품", item: "AiP 기판, MLCC",
          source: { title: "애플 아이폰, 국내 부품협력사는 어디? - 디일렉", url: "https://www.thelec.kr/news/articleView.html?idxno=18488" } },
        { name: "덕우전자", ticker: "263600", category: "부품", item: "카메라 모듈용 브래킷·스티프너",
          source: { title: "애플 아이폰, 국내 부품협력사는 어디? - 디일렉", url: "https://www.thelec.kr/news/articleView.html?idxno=18488" } },
        { name: "PI첨단소재", ticker: "178920", category: "소재", item: "방열시트용 폴리이미드 필름",
          source: { title: "애플 아이폰, 국내 부품협력사는 어디? - 디일렉", url: "https://www.thelec.kr/news/articleView.html?idxno=18488" } },
        { name: "이녹스첨단소재", ticker: "272290", category: "소재", item: "커버레이, OLED용 필름",
          source: { title: "애플 아이폰, 국내 부품협력사는 어디? - 디일렉", url: "https://www.thelec.kr/news/articleView.html?idxno=18488" } },
        { name: "비에이치", ticker: "090460", category: "부품", item: "경연성회로기판(RFPCB)",
          source: { title: "애플 아이폰, 국내 부품협력사는 어디? - 디일렉", url: "https://www.thelec.kr/news/articleView.html?idxno=18488" } },
        { name: "삼성SDI / LG화학", ticker: "006400 / 051910", category: "부품", item: "배터리셀",
          source: { title: "애플 아이폰, 국내 부품협력사는 어디? - 디일렉", url: "https://www.thelec.kr/news/articleView.html?idxno=18488" } }
      ]
    },
    {
      id: "TSLA",
      name: "테슬라 (Tesla)",
      ticker: "TSLA",
      market: "NASDAQ",
      type: "global",
      sector: "전기차·에너지저장",
      oneLiner: "중국 배터리 의존도를 낮추는 과정에서 한국 배터리·부품 기업과의 협력을 빠르게 늘리고 있습니다.",
      note: "미국의 대중(對中) 관세 정책 영향으로 LFP 배터리 등 핵심 부품의 공급망을 한국 기업으로 다변화하는 추세가 뉴스에서 확인됩니다.",
      suppliers: [
        { name: "LG에너지솔루션", ticker: "373220", category: "부품", item: "전기차용 각형 LFP 배터리, ESS용 배터리",
          source: { title: "삼성전기·LG엔솔…韓 동맹 늘리는 테슬라 - 한국경제", url: "https://www.hankyung.com/article/2026061577081" } },
        { name: "삼성SDI", ticker: "006400", category: "부품", item: "ESS용 배터리",
          source: { title: "삼성전기·LG엔솔…韓 동맹 늘리는 테슬라 - 한국경제", url: "https://www.hankyung.com/article/2026061577081" } },
        { name: "삼성전기", ticker: "009150", category: "부품", item: "카메라 모듈(자율주행·휴머노이드 로봇용)",
          source: { title: "테슬라 카메라 모듈 공급 싹쓸이에…삼성전기·LG이노텍 동반 급등 - 한국경제", url: "https://www.hankyung.com/article/202608056518i" } },
        { name: "LG이노텍", ticker: "011070", category: "부품", item: "카메라 모듈(전기차·로봇용)",
          source: { title: "테슬라 카메라 모듈 공급 싹쓸이에…삼성전기·LG이노텍 동반 급등 - 한국경제", url: "https://www.hankyung.com/article/202608056518i" } },
        { name: "LG디스플레이", ticker: "034220", category: "부품", item: "고성능 OLED 디스플레이(전기차용)",
          source: { title: "삼성전기·LG엔솔…韓 동맹 늘리는 테슬라 - 한국경제", url: "https://www.hankyung.com/article/2026061577081" } },
        { name: "삼성디스플레이", ticker: null, category: "부품", item: "로봇용 디스플레이(공급 추진 중)",
          source: { title: "삼성전기·LG엔솔…韓 동맹 늘리는 테슬라 - 한국경제", url: "https://www.hankyung.com/article/2026061577081" } }
      ]
    }
  ]
};
