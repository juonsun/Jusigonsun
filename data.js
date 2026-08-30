/* ===================================================================
   공급망지도 (SupplyMap) — 데이터 파일
   국내 주요 대기업 및 글로벌 대기업(애플·테슬라)의 협력사/공급망 정보.
   각 항목에는 출처(source)를 표기했습니다. 실제 투자 판단 전에는
   반드시 전자공시시스템(DART), 각 사 IR 자료 등 1차 출처를 확인하세요.
   =================================================================== */

const SUPPLY_CHAIN_DATA = {
  updatedAt: "2026-08-30",
  categories: {
    "계열사":   { slot: 4, desc: "동일 그룹 내 계열사로부터의 조달" },
    "소재":     { slot: 1, desc: "원재료·화학소재·부품 원료" },
    "부품":     { slot: 2, desc: "완제품에 들어가는 개별 부품·모듈" },
    "장비":     { slot: 3, desc: "생산·공정에 사용되는 제조·검사 장비" },
    "완성품":   { slot: 5, desc: "타사에 공급되는 반제품·완성 모듈" },
    "서비스":   { slot: 6, desc: "물류·엔지니어링 등 서비스 공급" },
    "사업부문": { slot: 7, desc: "매출·이익을 구성하는 주요 사업부문", nameHeader: "사업부문", itemHeader: "설명" },
    "주요고객": { slot: 8, desc: "주요 매출처·거래 고객사", nameHeader: "고객사", itemHeader: "거래 내용" }
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
,
    {
  "id": "207940",
  "name": "삼성바이오로직스",
  "ticker": "207940",
  "dartStockCodes": [
    "207940"
  ],
  "market": "KOSPI",
  "type": "domestic",
  "sector": "바이오(CDMO)",
  "oneLiner": "세계 최대 규모의 바이오의약품 위탁개발생산(CDMO) 기업",
  "note": "개별 협력사 명단은 원칙적으로 비공개이나 '코이노베이션 데이' 등 행사를 통해 글로벌 소부장 기업과의 협력 내용을 일부 공개하고 있으며, 4공장·5공장 증설에 따라 건설·설비 협력사와의 거래가 확대되고 있습니다.",
  "suppliers": [
    {
      "name": "머크(Merck)",
      "ticker": null,
      "category": "장비",
      "item": "바이오의약품 생산용 크로마토그래피 시스템",
      "source": {
        "title": "삼성바이오로직스, 동반성장 위한 '코이노베이션 데이' 첫 개최",
        "url": "https://samsungbiologics.com/kr/media/company-news/samsung-biologics-hosts-co-innovation-day-fortifying-supplier-partnership"
      }
    },
    {
      "name": "싸이티바(Cytiva)",
      "ticker": null,
      "category": "소재",
      "item": "세포배양배지·크로마토그래피 레진·필터 등 원부자재, ADC(항체약물접합체) 공정 기술",
      "source": {
        "title": "국내에 620억 투자하는 美싸이티바…\"안정적 공급 기대\"",
        "url": "https://edaily.co.kr/news/read?mediaCodeNo=257&newsId=02925766629183072"
      }
    },
    {
      "name": "싸토리우스(Sartorius)",
      "ticker": null,
      "category": "소재",
      "item": "일회용백·세포배양배지·필터 등 바이오의약품 원부자재",
      "source": {
        "title": "싸토리우스, 셀트리온·삼바와 원부자재 공급 MOU",
        "url": "http://inthenews.co.kr/article-77461/"
      }
    },
    {
      "name": "써모피셔사이언티픽(Thermo Fisher Scientific)",
      "ticker": null,
      "category": "장비",
      "item": "CHO세포 배양법, 싱글유즈 바이오리액터·원심분리기",
      "source": {
        "title": "삼성바이오로직스, 동반성장 위한 '코이노베이션 데이' 첫 개최",
        "url": "https://samsungbiologics.com/kr/media/company-news/samsung-biologics-hosts-co-innovation-day-fortifying-supplier-partnership"
      }
    },
    {
      "name": "삼성E&A(삼성엔지니어링)",
      "ticker": "028050",
      "category": "계열사",
      "item": "제4공장·제5공장 건설 시공(EPC)",
      "source": {
        "title": "삼바 5공장 공사 도급, 내년 말까지 삼성E&A가 맡는다",
        "url": "https://www.econovill.com/news/articleView.html?idxno=668178"
      }
    }
  ]
},
    {
  "id": "068270",
  "name": "셀트리온",
  "ticker": "068270",
  "dartStockCodes": [
    "068270"
  ],
  "market": "KOSPI",
  "type": "domestic",
  "sector": "바이오(바이오시밀러·CDMO)",
  "oneLiner": "글로벌 바이오시밀러 선두기업으로 CDMO 사업을 확장 중",
  "note": "원부자재 국산화에 적극적이어서 국내 소부장 기업의 상업생산 라인 첫 채택 사례가 다수 나오고 있으며, 원료의약품 생산과 신규 공장 엔지니어링은 해외 파트너사와 협력하고 있습니다.",
  "suppliers": [
    {
      "name": "마이크로디지탈",
      "ticker": "305090",
      "category": "소재",
      "item": "세포배양 배지 이송·저장, 무균 샘플링용 일회용 백 '더백'",
      "source": {
        "title": "마이크로디지탈, 셀트리온 생산공정에 '더백' 공급 계약 체결",
        "url": "https://www.mdtoday.co.kr/news/view/1065586428763553"
      }
    },
    {
      "name": "싸이티바(Cytiva)",
      "ticker": null,
      "category": "소재",
      "item": "세포배양배지·크로마토그래피 레진·필터·일회용 배양백",
      "source": {
        "title": "국내에 620억 투자하는 美싸이티바…\"안정적 공급 기대\"",
        "url": "https://edaily.co.kr/news/read?mediaCodeNo=257&newsId=02925766629183072"
      }
    },
    {
      "name": "싸토리우스(Sartorius)",
      "ticker": null,
      "category": "소재",
      "item": "일회용백·세포배양배지·필터 등 바이오의약품 원부자재",
      "source": {
        "title": "싸토리우스, 셀트리온·삼바와 원부자재 공급 MOU",
        "url": "http://inthenews.co.kr/article-77461/"
      }
    },
    {
      "name": "론자(Lonza)",
      "ticker": null,
      "category": "완성품",
      "item": "'램시마' 원료의약품(원액) 위탁생산",
      "source": {
        "title": "셀트리온, 스위스 '론자'와 '램시마' 원료의약품 위탁생산 계약",
        "url": "https://www.medifonews.com/news/article.html?no=148193"
      }
    },
    {
      "name": "우드(Wood)",
      "ticker": null,
      "category": "서비스",
      "item": "송도 4공장 엔지니어링 설계",
      "source": {
        "title": "[단독] 셀트리온, '송도 4공장' 엔지니어링 업체 선정",
        "url": "https://www.newswave.kr/news/articleView.html?idxno=512370"
      }
    }
  ]
},
    {
  "id": "012330",
  "name": "현대모비스",
  "ticker": "012330",
  "dartStockCodes": [
    "012330"
  ],
  "market": "KOSPI",
  "type": "domestic",
  "sector": "자동차부품(모듈·전동화·전장)",
  "oneLiner": "현대차그룹 핵심 부품·모듈을 생산하는 국내 1위 자동차부품사",
  "note": "다수의 1차 협력사 개별 계약 내용은 비공개이나, 차량용 반도체·SDV·로보틱스 등 신기술 분야에서는 국내외 파트너사와의 협력을 컨퍼런스·포럼 등을 통해 공개적으로 발표하고 있습니다.",
  "suppliers": [
    {
      "name": "마이크론(Micron)",
      "ticker": null,
      "category": "부품",
      "item": "HBM 등 차량용 메모리·인포테인먼트/ADAS용 저장장치(전략고객협약)",
      "source": {
        "title": "마이크론·현대모비스·퀄컴 부품 동맹 맺었다…장기 계약 체결",
        "url": "https://www.hankyung.com/article/2026071706567"
      }
    },
    {
      "name": "퀄컴(Qualcomm)",
      "ticker": null,
      "category": "부품",
      "item": "SDV·ADAS용 스냅드래곤 기반 칩셋 및 통합 솔루션 공동개발",
      "source": {
        "title": "현대모비스, 퀄컴과 SDV·ADAS 솔루션 '맞손' [CES 2026]",
        "url": "https://v.daum.net/v/XR22vycnSD"
      }
    },
    {
      "name": "보스턴다이내믹스",
      "ticker": null,
      "category": "계열사",
      "item": "AI 로보틱스용 부품·기술 전략적 협력(현대차그룹 계열사)",
      "source": {
        "title": "현대모비스, 보스턴다이내믹스와 로봇 부품 전략적 협력",
        "url": "http://www.press9.kr/news/articleView.html?idxno=70726"
      }
    },
    {
      "name": "LX세미콘",
      "ticker": "108320",
      "category": "부품",
      "item": "차량용 반도체 공동개발(K-차반도체산업 육성 협력)",
      "source": {
        "title": "현대모비스, 국내 20여개 기업과 손잡고 K-車반도체산업 육성한다!",
        "url": "https://www.hyundaimotorgroup.com/ko/news/CONT0000000000188074"
      }
    },
    {
      "name": "DB하이텍",
      "ticker": "000990",
      "category": "부품",
      "item": "차량용 반도체 파운드리 공동개발",
      "source": {
        "title": "현대모비스, 국내 20여개 기업과 손잡고 K-車반도체산업 육성한다!",
        "url": "https://www.hyundaimotorgroup.com/ko/news/CONT0000000000188074"
      }
    },
    {
      "name": "동운아나텍",
      "ticker": "094170",
      "category": "부품",
      "item": "차량용 구동반도체(액추에이터 드라이버 IC) 공동개발·양산 예정",
      "source": {
        "title": "현대모비스, 국내 20여개 기업과 손잡고 K-車반도체산업 육성한다!",
        "url": "https://www.hyundaimotorgroup.com/ko/news/CONT0000000000188074"
      }
    }
  ]
},
    {
  "id": "051910",
  "name": "LG화학",
  "ticker": "051910",
  "dartStockCodes": [
    "051910"
  ],
  "market": "KOSPI",
  "type": "domestic",
  "sector": "화학·배터리소재(양극재 등)",
  "oneLiner": "석유화학과 배터리 양극재 등 첨단소재를 아우르는 화학기업",
  "note": "양극재 핵심 원료인 전구체와 리튬은 국내외 다수 업체와의 장기 공급계약을 통해 조달하고 있으며, 북미·호주 등으로 원재료 공급망을 다변화하고 있습니다.",
  "suppliers": [
    {
      "name": "코스모신소재",
      "ticker": "005070",
      "category": "소재",
      "item": "NCMA(니켈코발트망간알루미늄) 양극재 1차 소성 위탁(3,621억원, 2024.5~2025.4)",
      "source": {
        "title": "코스모신소재, LG화학에 NCMA 양극재 공급…3621억 규모",
        "url": "https://zdnet.co.kr/view/?no=20240708105142"
      }
    },
    {
      "name": "한국전구체주식회사(KPC)",
      "ticker": null,
      "category": "소재",
      "item": "양극재용 전구체(고려아연 자회사 켐코 합작법인)",
      "source": {
        "title": "LG화학, 현대차·LG엔솔 합작사 양극재 공급사로 '낙점'",
        "url": "https://www.thelec.kr/news/articleView.html?idxno=60737"
      }
    },
    {
      "name": "에코앤드림",
      "ticker": "183490",
      "category": "소재",
      "item": "양극재용 전구체",
      "source": {
        "title": "LG화학, 현대차·LG엔솔 합작사 양극재 공급사로 '낙점'",
        "url": "https://www.thelec.kr/news/articleView.html?idxno=60737"
      }
    },
    {
      "name": "후성",
      "ticker": "093370",
      "category": "소재",
      "item": "2차전지 전해질(LiPF6), 폴란드 브로츠와프 배터리 공장 공급망 포함",
      "source": {
        "title": "[시그널 단독]현대家 후성, 전해질(LiPF6) 사업 확 키운다",
        "url": "https://www.sedaily.com/article/12193678"
      }
    },
    {
      "name": "엑슨모빌(ExxonMobil)",
      "ticker": null,
      "category": "소재",
      "item": "탄산리튬 10만톤(미국 아칸소 염호산, 2030년부터 최장 10년 공급)",
      "source": {
        "title": "LG화학, 美 엑슨모빌과 맞손…배터리 공급망 안정성 높였다",
        "url": "https://www.hankyung.com/article/2024112167581"
      }
    },
    {
      "name": "네마스카리튬(Nemaska Lithium)",
      "ticker": null,
      "category": "소재",
      "item": "수산화리튬 연 7,000톤, 5년간 공급(2020년 하반기~)",
      "source": {
        "title": "LG화학, 네마스카리튬과 수산화리튬 장기 공급계약 체결",
        "url": "https://www.kipost.net/news/articleView.html?idxno=1168"
      }
    },
    {
      "name": "톈치리튬(Tianqi Lithium)",
      "ticker": null,
      "category": "소재",
      "item": "수산화리튬 공급(하이니켈 양극재용)",
      "source": {
        "title": "[단독] LG화학·中톈치리튬, 수산화리튬 공급계약 체결…하이니켈 양극재 사업 청신호",
        "url": "https://www.theguru.co.kr/mobile/article.html?no=37645"
      }
    }
  ]
},
    {
  "id": "247540",
  "name": "에코프로비엠",
  "ticker": "247540",
  "dartStockCodes": [
    "247540"
  ],
  "market": "KOSDAQ",
  "type": "domestic",
  "sector": "이차전지 소재(양극재)",
  "oneLiner": "국내 대표 하이니켈 NCA/NCM 양극재 전문 제조사",
  "note": "전구체·수산화리튬 등 핵심 원료는 에코프로머티리얼즈·에코프로이노베이션 등 계열사와 중국 GEM, 독일 AMG리튬 같은 해외 소재사에 상당 부분 의존하는 구조이며, 최근 인도네시아 니켈 제련 투자 등으로 원료 밸류체인을 그룹 차원에서 내재화하려는 움직임이 활발합니다.",
  "suppliers": [
    {
      "name": "에코프로머티리얼즈",
      "ticker": "450080",
      "category": "계열사",
      "item": "전구체(precursor)",
      "source": {
        "title": "없어서 못 산다는데…K-양극재, 탈중국 전구체 확보 전략은 - ZDNet Korea",
        "url": "https://zdnet.co.kr/view/?no=20240922184241"
      }
    },
    {
      "name": "GEM(格林美/거린메이)",
      "ticker": null,
      "category": "소재",
      "item": "전구체 26.5만톤 공급 MOU(니켈 원료)",
      "source": {
        "title": "중국 기업 에코프로비엠에 전구체 소재 26만5천 톤 공급 - 비즈니스포스트",
        "url": "https://www.businesspost.co.kr/BP?command=article_view&num=362829"
      }
    },
    {
      "name": "성일하이텍",
      "ticker": "365340",
      "category": "서비스",
      "item": "폐배터리 리사이클링(리튬·니켈 등 소재 회수)",
      "source": {
        "title": "[단독] '헝가리 양산 코앞' 에코프로, 성일하이텍 찾았다 - ZDNet Korea",
        "url": "https://zdnet.co.kr/view/?no=20260603135059"
      }
    },
    {
      "name": "에코프로이노베이션",
      "ticker": null,
      "category": "계열사",
      "item": "수산화리튬",
      "source": {
        "title": "에코프로이노베이션, 글로벌 완성차에 수산화리튬 첫 공급 - 뉴스핌",
        "url": "https://www.newspim.com/news/view/20260522000229"
      }
    },
    {
      "name": "AMG리튬(독일)",
      "ticker": null,
      "category": "소재",
      "item": "배터리용 수산화리튬(연 5천톤 수급계약)",
      "source": {
        "title": "에코프로, 독일 AMG리튬 사와 배터리용 수산화리튬 수급계약… 연 5천톤 공급 - 인더스트리뉴스",
        "url": "https://www.industrynews.co.kr/news/articleView.html?idxno=47040"
      }
    }
  ]
},
    {
  "id": "066570",
  "name": "LG전자",
  "ticker": "066570",
  "dartStockCodes": [
    "066570"
  ],
  "market": "KOSPI",
  "type": "domestic",
  "sector": "가전·전자(생활가전/TV/전장)",
  "oneLiner": "생활가전·TV·전장부품을 아우르는 종합 전자기업",
  "note": "핵심 전자부품은 계열사 LG이노텍을 통해 조달하는 한편, 전기차 부품(알루미늄박·강판·MLCC)은 외부 코스피·코스닥 부품사와의 관계가 뉴스를 통해 확인되며, 최근에는 로보스타·로보티즈 등 로봇기업에 대한 지분투자로 협력망을 로봇 분야까지 넓히고 있습니다.",
  "suppliers": [
    {
      "name": "LG이노텍",
      "ticker": "011070",
      "category": "계열사",
      "item": "전기전자 부품(카메라모듈 등)",
      "source": {
        "title": "LG전자 주요 협력업체 및 관계사 리스트 정리 - 캐드앤그래픽스",
        "url": "https://www.cadgraphics.co.kr/newsview.php?pages=directory&sub=directory07&catecode=40&num=70527"
      }
    },
    {
      "name": "삼아알미늄",
      "ticker": "006110",
      "category": "소재",
      "item": "전기차 파워트레인용 알루미늄박·부품",
      "source": {
        "title": "[특징주]LG전자 전기차 부품 생산에 삼아알미늄 등 부품株 강세 - 서울경제",
        "url": "https://www.sedaily.com/NewsVIew/1ZBSO0VKBB"
      }
    },
    {
      "name": "TCC스틸",
      "ticker": "031310",
      "category": "소재",
      "item": "2차전지·전기차 부품용 도금강판 소재",
      "source": {
        "title": "[특징주]LG전자 전기차 부품 생산에 삼아알미늄 등 부품株 강세 - 서울경제",
        "url": "https://www.sedaily.com/NewsVIew/1ZBSO0VKBB"
      }
    },
    {
      "name": "삼화콘덴서",
      "ticker": "001820",
      "category": "부품",
      "item": "전장용 적층세라믹콘덴서(MLCC)",
      "source": {
        "title": "[특징주]LG전자 전기차 부품 생산에 삼아알미늄 등 부품株 강세 - 서울경제",
        "url": "https://www.sedaily.com/NewsVIew/1ZBSO0VKBB"
      }
    },
    {
      "name": "로보스타",
      "ticker": "090360",
      "category": "계열사",
      "item": "산업용 로봇(LG전자 지분 인수 계열사)",
      "source": {
        "title": "LG전자, 산업용 로봇제조 '로보스타' 지분 취득 - LG그룹 뉴스룸",
        "url": "https://www.lg.co.kr/media/release/9525"
      }
    },
    {
      "name": "로보티즈",
      "ticker": "108490",
      "category": "부품",
      "item": "로봇 부품/생산 협력(우즈벡 공장 지분투자 MOU)",
      "source": {
        "title": "LG전자, 로보티즈 우즈벡 로봇 생산 공장 지분투자 MOU - AI타임스",
        "url": "https://www.aitimes.com/news/articleView.html?idxno=212001"
      }
    }
  ]
},
    {
  "id": "010120",
  "name": "LS ELECTRIC",
  "ticker": "010120",
  "dartStockCodes": [
    "010120"
  ],
  "market": "KOSPI",
  "type": "domestic",
  "sector": "전력기기(중전기)",
  "oneLiner": "배전·전력기기 및 산업자동화 솔루션 전문기업",
  "note": "분기보고서상 원재료(은·동·철·MAIN Ass'y) 매입처는 '㈜태인 외 다수'로만 공개되는 등 세부 협력사 정보 공개가 제한적이며, 최근 북미·유럽 수주 확대에 대응해 GE버노바·인피니언·파워일렉트로닉스 등 해외 기술기업과 잇단 MOU로 핵심 부품·기술 공급망을 다변화하고 있습니다.",
  "suppliers": [
    {
      "name": "태인",
      "ticker": null,
      "category": "부품",
      "item": "차단기용 은·동·철, MAIN Ass'y(전기도체·커버 등)",
      "source": {
        "title": "[테크기업 공급망 분석] LS일렉트릭, 사위회사 '태인'과 37년 끈끈한 혈맹 - 더벨",
        "url": "https://www.thebell.co.kr/front/newsview.asp?key=202304191815019520108968"
      }
    },
    {
      "name": "GE Vernova",
      "ticker": null,
      "category": "장비",
      "item": "전압형 HVDC 변환밸브 핵심기술",
      "source": {
        "title": "LS ELECTRIC-GE버노바, 전압형 HVDC 변환설비 국산화 협력 - LS그룹 뉴스룸",
        "url": "https://www.lsholdings.com/ko/media/news/73374e56594b6c42746a3361416642455556315274444a4e465433616e706c63"
      }
    },
    {
      "name": "Infineon Technologies(인피니언)",
      "ticker": null,
      "category": "부품",
      "item": "전력반도체 기반 DC 전력 솔루션(전력반도체 차단기 등)",
      "source": {
        "title": "LS일렉트릭, 獨 인피니언과 직류 전력 솔루션 공동 개발 - 전자신문",
        "url": "https://www.etnews.com/20260713000068"
      }
    },
    {
      "name": "Power Electronics(파워일렉트로닉스, 스페인)",
      "ticker": null,
      "category": "부품",
      "item": "ESS용 PCS 등 전력기기 상호공급(MOU)",
      "source": {
        "title": "유럽 전력망 40% 이상 노후화…韓 전력기기, 기술력 앞세워 수출 확대 시동 - 헤럴드경제(Daum)",
        "url": "https://v.daum.net/v/20250625170015900?f=p"
      }
    }
  ]
},
    {
  "id": "298040",
  "name": "효성중공업",
  "ticker": "298040",
  "dartStockCodes": [
    "298040"
  ],
  "market": "KOSPI",
  "type": "domestic",
  "sector": "중공업(전력기기/변압기)",
  "oneLiner": "초고압변압기·차단기 등 전력기기 전문 중공업기업",
  "note": "미국·유럽向 초고압변압기 수주가 급증하면서 핵심 부품인 고전압 부싱을 트렌치 그룹 등 해외 전문기업으로부터 조달하고 있으며, ESS 사업은 삼성SDI·중국 REPT BATTERO 등에서 배터리 셀을 구매해 시스템으로 재판매하는 구조입니다.",
  "suppliers": [
    {
      "name": "트렌치 그룹(Trench Group)",
      "ticker": null,
      "category": "부품",
      "item": "765kV급 초고압 변압기용 고전압 부싱",
      "source": {
        "title": "[단독] 효성중공업, 트렌치 그룹과 美 초고압 변압기 핵심 부품 공급 계약 - 더구루",
        "url": "https://theguru.co.kr/news/article.html?no=102419"
      }
    },
    {
      "name": "포스코",
      "ticker": "005490",
      "category": "소재",
      "item": "변압기용 방향성 전기강판",
      "source": {
        "title": "포스코, 효성중공업 방문 전기강판 상생방안 등 논의 - 디지털타임스",
        "url": "https://www.dt.co.kr/article/10878798"
      }
    },
    {
      "name": "삼성SDI",
      "ticker": "006400",
      "category": "부품",
      "item": "ESS용 배터리 셀",
      "source": {
        "title": "[현장]\"中을 뛰어넘어라\"…'인터배터리 유럽'에서 찾은 ESS 시장 - 데일리안",
        "url": "https://www.dailian.co.kr/news/view/1374369/%ED%98%84%EC%9E%A5%E4%B8%AD-%EB%9B%B0%EC%96%B4%EB%84%98%EC%96%B4%EB%9D%BC%EC%9D%B8%ED%84%B0%EB%B0%B0%ED%84%B0%EB%A6%AC-%EC%9C%A0%EB%9F%BD-%EC%B0%BE%EC%9D%80-2024"
      }
    },
    {
      "name": "REPT BATTERO(렙 바트로)",
      "ticker": null,
      "category": "부품",
      "item": "ESS용 에너지저장 셀·모듈·DC 컨테이너",
      "source": {
        "title": "효성중공업-렙 바트로, 2.5GWh ESS 동맹… 글로벌 시장 정조준 - 투데이에너지",
        "url": "https://www.todayenergy.kr/news/articleView.html?idxno=283986"
      }
    }
  ]
},
    {
  "id": "267260",
  "name": "HD현대일렉트릭",
  "ticker": "267260",
  "dartStockCodes": [
    "267260"
  ],
  "market": "KOSPI",
  "type": "domestic",
  "sector": "전력기기·중전기",
  "oneLiner": "초고압 변압기·차단기 등 중전기기를 생산하는 전력기기 전문기업",
  "note": "초고압 변압기의 핵심 부품인 부싱은 국내에 마땅한 대체 공급처가 없어 해외 소수 전문업체 의존도가 매우 높습니다. 실제로 2025~2026년 글로벌 부싱 수급난으로 변압기 납기가 지연되는 사례가 보도되기도 했습니다. 국내 협력업체 명단은 공개 자료에서 거의 확인되지 않아, 확인 가능한 협력사 수가 매우 제한적으로만 수록되어 있습니다.",
  "suppliers": [
    {
      "name": "HSP",
      "ticker": null,
      "category": "부품",
      "item": "초고압/HVDC 변압기용 부싱(Bushing) 공급 - 사전공급계약(Frame Agreement) 체결",
      "source": {
        "title": "'부싱' 적기 조달에 변압기 납기 걸렸다...HD현대 - 일렉트릭타임즈",
        "url": "https://www.electimes.com/news/articleView.html?idxno=360885"
      }
    }
  ]
},
    {
  "id": "010130",
  "name": "고려아연",
  "ticker": "010130",
  "dartStockCodes": [
    "010130"
  ],
  "market": "KOSPI",
  "type": "domestic",
  "sector": "비철금속제련·이차전지소재",
  "oneLiner": "아연·연·금·은 등 비철금속을 제련하고 이차전지 소재로 영역을 넓힌 기업",
  "note": "고려아연은 아연정광·니켈매트 등 원료를 해외 트레이딩사와의 장기계약으로 조달하고, 정련된 금속을 켐코·케이잼·한국전구체 등 국내 계열사를 통해 황산니켈·동박·전구체 등 이차전지 소재로 가공하는 수직계열화 구조가 특징입니다. POSCO홀딩스처럼 외부 협력사보다 그룹 내 밸류체인 비중이 큽니다.",
  "suppliers": [
    {
      "name": "Trafigura",
      "ticker": null,
      "category": "소재",
      "item": "니켈 원료(니켈매트) 연 2만~4만톤 장기공급계약, 온산 '올인원 니켈제련소' 공동 투자(1,850억원 규모)",
      "source": {
        "title": "고려아연, Trafigura와 1,850억 규모 '올인원 니켈 제련소' 투자 협약 체결",
        "url": "https://www.koreazinc.co.kr/%EA%B3%A0%EB%A0%A4%EC%95%84%EC%97%B0-trafigura%EC%99%80-1850%EC%96%B5-%EA%B7%9C%EB%AA%A8-%EC%98%AC%EC%9D%B8%EC%9B%90-%EB%8B%88%EC%BC%88-%EC%A0%9C%EB%A0%A8%EC%86%8C-%ED%88%AC/"
      }
    },
    {
      "name": "켐코",
      "ticker": null,
      "category": "계열사",
      "item": "황산니켈 제조·판매 계열사 - 고려아연 원료를 이차전지 소재로 가공하는 밸류체인 중심축",
      "source": {
        "title": "국내 계열사 – 고려아연",
        "url": "https://www.koreazinc.co.kr/company/network/domestic/"
      }
    },
    {
      "name": "케이잼",
      "ticker": null,
      "category": "계열사",
      "item": "이차전지용 동박(Copper Foil) 제조·판매 계열사",
      "source": {
        "title": "국내 계열사 – 고려아연",
        "url": "https://www.koreazinc.co.kr/company/network/domestic/"
      }
    },
    {
      "name": "한국전구체",
      "ticker": null,
      "category": "계열사",
      "item": "켐코(51%)·LG화학(49%) 합작법인, 이차전지 양극재용 전구체 제조·판매",
      "source": {
        "title": "고려아연 계열사 켐코, LG화학과 2차전지 핵심소재인 전구체 합작법인 설립 – 고려아연",
        "url": "https://www.koreazinc.co.kr/%EA%B3%A0%EB%A0%A4%EC%95%84%EC%97%B0-%EA%B3%84%EC%97%B4%EC%82%AC-%EC%BC%90%EC%BD%94-lg%ED%99%94%ED%95%99%EA%B3%BC-2%EC%B0%A8%EC%A0%84%EC%A7%80-%ED%95%B5%EC%8B%AC%EC%86%8C%EC%9E%AC%EC%9D%B8-%EC%A0%84/"
      }
    },
    {
      "name": "코리아니켈",
      "ticker": null,
      "category": "계열사",
      "item": "니켈금속 및 니켈함유합금 제련·제조판매 계열사",
      "source": {
        "title": "국내 계열사 – 고려아연",
        "url": "https://www.koreazinc.co.kr/company/network/domestic/"
      }
    },
    {
      "name": "스틸싸이클",
      "ticker": null,
      "category": "계열사",
      "item": "금속원료(스크랩) 재생업 계열사 - 재활용 원료 조달",
      "source": {
        "title": "국내 계열사 – 고려아연",
        "url": "https://www.koreazinc.co.kr/company/network/domestic/"
      }
    }
  ]
},
    {
  "id": "042660",
  "name": "한화오션",
  "ticker": "042660",
  "dartStockCodes": [
    "042660"
  ],
  "market": "KOSPI",
  "type": "domestic",
  "sector": "조선·해양플랜트·특수선(방산)",
  "oneLiner": "상선·해양플랜트에 잠수함 등 특수선(방산)까지 아우르는 종합조선기업",
  "note": "일반 상선 부문은 성광벤드 등 조선기자재 전문업체로부터 배관 피팅 등을 공급받고, 후판(강판)은 포스코·현대제철과 매 반기 가격을 협상해 조달합니다. 특수선(함정) 부문은 한화시스템·한화에어로스페이스 등 한화그룹 방산 계열사와 전투체계·무장을 공동 개발·대응하는 구조가 특징입니다.",
  "suppliers": [
    {
      "name": "성광벤드",
      "ticker": "014620",
      "category": "부품",
      "item": "선박·해양플랜트 배관용 금속관이음쇠(피팅) 공급 - LNG운반선 등에 사용, HD현대중공업·삼성중공업에도 납품",
      "source": {
        "title": "[K조선 공급망]성광벤드, 돌아온 '조선 피팅' 수익성 회복 잰걸음 - 블로터",
        "url": "https://www.bloter.net/news/articleView.html?idxno=667798"
      }
    },
    {
      "name": "한화시스템",
      "ticker": "272210",
      "category": "계열사",
      "item": "함정 전투체계(CMS)·레이더 등 국산화 무장체계 공급, KDDX 등 특수선 사업에서 매주 공동 점검회의 진행",
      "source": {
        "title": "한화 방산 3사, 특수선 사업 수주 '총력'…그룹 역량 결집한다 - 인베스트조선",
        "url": "https://www.investchosun.com/site/data/html_dir/2026/01/23/2026012380076.html"
      }
    },
    {
      "name": "한화에어로스페이스",
      "ticker": "012450",
      "category": "계열사",
      "item": "캐나다 잠수함·KDDX 등 특수선 방산사업에서 절충교역 지원 등으로 협력하는 그룹 방산 계열사",
      "source": {
        "title": "한화 방산 3사, 특수선 사업 수주 '총력'…그룹 역량 결집한다 - 인베스트조선",
        "url": "https://www.investchosun.com/site/data/html_dir/2026/01/23/2026012380076.html"
      }
    },
    {
      "name": "한화오션에코텍",
      "ticker": null,
      "category": "계열사",
      "item": "선박블록 및 기자재 제작 담당 자회사 (지분율 98.51%)",
      "source": {
        "title": "한화오션 - 기업개요 - 기업모니터(WiseReport)",
        "url": "https://comp.wisereport.co.kr/company/c1020001.aspx?cmp_cd=042660"
      }
    },
    {
      "name": "포스코",
      "ticker": "005490",
      "category": "소재",
      "item": "조선용 후판(선체 강판) 공급 - 통상 반기마다 조선사와 가격 협상",
      "source": {
        "title": "조선용 후판 가격 협상 장기화…철강 vs 조선 '1년째 줄다리기' - 더퍼블릭",
        "url": "https://www.thepublic.kr/news/articleView.html?idxno=293603"
      }
    },
    {
      "name": "현대제철",
      "ticker": "004020",
      "category": "소재",
      "item": "조선용 후판(선체 강판) 공급업체",
      "source": {
        "title": "조선용 후판 가격 협상 장기화…철강 vs 조선 '1년째 줄다리기' - 더퍼블릭",
        "url": "https://www.thepublic.kr/news/articleView.html?idxno=293603"
      }
    }
  ]
},
    {
  "id": "009540",
  "name": "HD한국조선해양",
  "ticker": "009540",
  "dartStockCodes": [
    "009540"
  ],
  "market": "KOSPI",
  "type": "domestic",
  "sector": "조선·해양플랜트 중간지주회사",
  "oneLiner": "HD현대중공업 등 조선 자회사를 거느린 조선·해양 부문 중간지주회사",
  "note": "직접 생산활동을 하지 않는 중간지주회사로, 실제 선박 건조는 HD현대중공업·HD현대삼호 등 자회사가 담당합니다. 후판(강판)은 포스코·현대제철로부터 매 반기 가격 협상을 통해 그룹 공통으로 조달합니다.",
  "suppliers": [
    {
      "name": "HD현대중공업",
      "ticker": "329180",
      "category": "계열사",
      "item": "조선 부문 핵심 자회사(지분율 69.23%) - 상선·해양플랜트·엔진 건조 담당",
      "source": {
        "title": "HD한국조선해양 - 기업개요 - 기업모니터(WiseReport)",
        "url": "https://comp.wisereport.co.kr/company/c1020001.aspx?cmp_cd=009540&cn="
      }
    },
    {
      "name": "HD현대삼호",
      "ticker": null,
      "category": "계열사",
      "item": "선박 건조를 담당하는 비상장 자회사 (지분율 96.65%)",
      "source": {
        "title": "HD한국조선해양 - 기업개요 - 기업모니터(WiseReport)",
        "url": "https://comp.wisereport.co.kr/company/c1020001.aspx?cmp_cd=009540&cn="
      }
    },
    {
      "name": "HD현대에너지솔루션",
      "ticker": "322000",
      "category": "계열사",
      "item": "태양광 반도체 소자(모듈) 제조 자회사(지분율 53.57%) - 신재생에너지 사업 다각화",
      "source": {
        "title": "HD한국조선해양 - 기업개요 - 기업모니터(WiseReport)",
        "url": "https://comp.wisereport.co.kr/company/c1020001.aspx?cmp_cd=009540&cn="
      }
    },
    {
      "name": "포스코",
      "ticker": "005490",
      "category": "소재",
      "item": "조선용 후판(선체 강판) 공급 - 통상 반기마다 조선사와 가격 협상",
      "source": {
        "title": "조선용 후판 가격 협상 장기화…철강 vs 조선 '1년째 줄다리기' - 더퍼블릭",
        "url": "https://www.thepublic.kr/news/articleView.html?idxno=293603"
      }
    },
    {
      "name": "현대제철",
      "ticker": "004020",
      "category": "소재",
      "item": "조선용 후판(선체 강판) 공급업체",
      "source": {
        "title": "조선용 후판 가격 협상 장기화…철강 vs 조선 '1년째 줄다리기' - 더퍼블릭",
        "url": "https://www.thepublic.kr/news/articleView.html?idxno=293603"
      }
    }
  ]
},
    {
  "id": "035420",
  "name": "NAVER",
  "ticker": "035420",
  "dartStockCodes": [
    "035420"
  ],
  "market": "KOSPI",
  "type": "domestic",
  "sector": "IT/인터넷 플랫폼",
  "oneLiner": "검색·커머스·콘텐츠를 아우르는 국내 1위 인터넷 플랫폼",
  "note": "제조업과 달리 부품 협력사가 없어 사업부문별 매출구조로 분석했습니다. 2019년 매출의 60.9%를 차지하던 서치플랫폼 비중이 2025년 34.6%까지 낮아진 반면 커머스는 18.2%에서 30.6%로 커지며 사업 무게중심이 이동하고 있습니다.",
  "suppliers": [
    {
      "name": "서치플랫폼",
      "ticker": null,
      "category": "사업부문",
      "item": "검색·디스플레이 광고 사업부문. 2025년 연간 매출 4조1,689억원으로 전체 매출의 34.6% 차지(2019년 60.9%에서 비중 축소 추세)",
      "source": {
        "title": "네이버, 확 바뀐 매출구조…광고 급감, 커머스 급증 - 데이터뉴스",
        "url": "https://www.datanews.co.kr/news/article.html?no=143883"
      }
    },
    {
      "name": "커머스",
      "ticker": null,
      "category": "사업부문",
      "item": "스마트스토어 등 커머스 사업부문. 2025년 연간 매출 3조6,884억원으로 전체 매출의 30.6% 차지, 2025년 4분기 기준 서치플랫폼과의 매출 격차가 56억원까지 좁혀짐",
      "source": {
        "title": "네이버, 확 바뀐 매출구조…광고 급감, 커머스 급증 - 데이터뉴스",
        "url": "https://www.datanews.co.kr/news/article.html?no=143883"
      }
    },
    {
      "name": "핀테크",
      "ticker": null,
      "category": "사업부문",
      "item": "네이버페이 등 핀테크 사업부문. 2025년 4분기 매출 4,531억원으로 전체 매출(3조1,951억원)의 14.2% 차지",
      "source": {
        "title": "네이버, 2025년 연간 매출 12조...최대 실적 달성! 2026년 로드맵은? - kt nasmedia 공식 블로그",
        "url": "https://blog.nasmedia.co.kr/entry/2602mediaissue-naver254q"
      }
    },
    {
      "name": "콘텐츠",
      "ticker": null,
      "category": "사업부문",
      "item": "웹툰 등 콘텐츠 사업부문. 2025년 4분기 매출 4,567억원으로 전체 매출의 14.3% 차지",
      "source": {
        "title": "네이버, 2025년 연간 매출 12조...최대 실적 달성! 2026년 로드맵은? - kt nasmedia 공식 블로그",
        "url": "https://blog.nasmedia.co.kr/entry/2602mediaissue-naver254q"
      }
    },
    {
      "name": "클라우드(엔터프라이즈)",
      "ticker": null,
      "category": "사업부문",
      "item": "네이버클라우드 등 B2B·엔터프라이즈 사업부문. 2025년 4분기 매출 1,718억원으로 전체 매출의 5.4% 차지",
      "source": {
        "title": "네이버, 2025년 연간 매출 12조...최대 실적 달성! 2026년 로드맵은? - kt nasmedia 공식 블로그",
        "url": "https://blog.nasmedia.co.kr/entry/2602mediaissue-naver254q"
      }
    }
  ]
},
    {
  "id": "035720",
  "name": "카카오",
  "ticker": "035720",
  "dartStockCodes": [
    "035720"
  ],
  "market": "KOSPI",
  "type": "domestic",
  "sector": "IT/인터넷 플랫폼",
  "oneLiner": "카카오톡 기반 플랫폼·콘텐츠 사업을 영위하는 IT 기업",
  "note": "카카오는 148개에 달하는 종속회사를 거느린 복합 플랫폼 기업입니다. 2026년에는 카카오게임즈 경영권을 라인야후에 매각하는 등 비핵심 자회사를 정리하고 톡비즈·금융 등 핵심 사업에 집중하는 흐름을 보이고 있습니다.",
  "suppliers": [
    {
      "name": "톡비즈",
      "ticker": null,
      "category": "사업부문",
      "item": "카카오톡 기반 광고·커머스 사업부문. 2026년 1분기 매출 6,086억원으로 전체 매출(1조9,421억원)의 약 31.3% 차지",
      "source": {
        "title": "카카오, 2026년 1분기 매출액 1조 9,421억 원, 영업이익 2,114억 원 | 카카오",
        "url": "https://www.kakaocorp.com/page/detail/12023"
      }
    },
    {
      "name": "플랫폼 기타(모빌리티·페이 등)",
      "ticker": null,
      "category": "사업부문",
      "item": "카카오모빌리티·카카오페이 등 플랫폼 기타 사업부문. 2026년 1분기 매출 5,065억원으로 전체 매출의 약 26.1% 차지, 전년 동기 대비 30% 증가",
      "source": {
        "title": "카카오, 2026년 1분기 매출액 1조 9,421억 원, 영업이익 2,114억 원 | 카카오",
        "url": "https://www.kakaocorp.com/page/detail/12023"
      }
    },
    {
      "name": "뮤직",
      "ticker": null,
      "category": "사업부문",
      "item": "멜론 등 음악 콘텐츠 사업부문. 2026년 1분기 매출 4,846억원으로 전체 매출의 약 25.0% 차지",
      "source": {
        "title": "카카오, 2026년 1분기 매출액 1조 9,421억 원, 영업이익 2,114억 원 | 카카오",
        "url": "https://www.kakaocorp.com/page/detail/12023"
      }
    },
    {
      "name": "스토리(웹툰·웹소설)",
      "ticker": null,
      "category": "사업부문",
      "item": "웹툰·웹소설 콘텐츠 사업부문. 2026년 1분기 매출 1,824억원으로 전체 매출의 약 9.4% 차지",
      "source": {
        "title": "카카오, 2026년 1분기 매출액 1조 9,421억 원, 영업이익 2,114억 원 | 카카오",
        "url": "https://www.kakaocorp.com/page/detail/12023"
      }
    },
    {
      "name": "미디어(영상 콘텐츠)",
      "ticker": null,
      "category": "사업부문",
      "item": "카카오엔터테인먼트 영상 콘텐츠 사업부문. 2026년 1분기 매출 924억원으로 전체 매출의 약 4.8% 차지",
      "source": {
        "title": "카카오, 2026년 1분기 매출액 1조 9,421억 원, 영업이익 2,114억 원 | 카카오",
        "url": "https://www.kakaocorp.com/page/detail/12023"
      }
    },
    {
      "name": "카카오뱅크",
      "ticker": "323410",
      "category": "계열사",
      "item": "인터넷전문은행 자회사. 2021년 상장 이후 카카오가 최대주주로 지분 27.15%(129,533,725주) 보유",
      "source": {
        "title": "카카오뱅크 - 지분현황 - 온라인기업정보(WiseReport)",
        "url": "https://comp.wisereport.co.kr/company/c1070001.aspx?cmp_cd=323410&cn="
      }
    },
    {
      "name": "카카오페이",
      "ticker": "377300",
      "category": "계열사",
      "item": "간편결제·핀테크 자회사. 카카오가 최대주주로 지분 46.09%(62,351,920주) 보유",
      "source": {
        "title": "카카오페이 - 지분현황 - 온라인기업정보(WiseReport)",
        "url": "https://comp.wisereport.co.kr/company/c1070001.aspx?cmp_cd=377300&cn="
      }
    }
  ]
},
    {
  "id": "032830",
  "name": "삼성생명",
  "ticker": "032830",
  "dartStockCodes": [
    "032830"
  ],
  "market": "KOSPI",
  "type": "domestic",
  "sector": "생명보험",
  "oneLiner": "국내 최대 생명보험사, 삼성카드 등 금융 계열사 보유",
  "note": "보험사이므로 부품 협력사 대신 보험서비스손익·투자손익 등 수익구성과 삼성카드·삼성자산운용 등 금융 계열사 지분으로 사업구조를 파악했습니다. 삼성전자 자사주 소각이 진행될수록 삼성생명·삼성화재의 삼성전자 지분율이 자동 상승해 금산분리(금산법 10% 규제선) 이슈의 핵심 당사자이기도 합니다.",
  "suppliers": [
    {
      "name": "삼성카드",
      "ticker": "029780",
      "category": "계열사",
      "item": "신용카드 자회사. 삼성생명이 지분 71.86%를 보유한 최대주주로 지배력을 행사",
      "source": {
        "title": "삼성카드, 계열사 거래 1407억원…삼성생명 지배력 71.86% - 디지털데일리",
        "url": "https://www.ddaily.co.kr/page/view/2026060114173812248"
      }
    },
    {
      "name": "삼성자산운용",
      "ticker": null,
      "category": "계열사",
      "item": "자산운용 완전자회사. 삼성생명이 지분 100%를 보유",
      "source": {
        "title": "삼성자산운용 - 위키백과",
        "url": "https://ko.wikipedia.org/wiki/%EC%82%BC%EC%84%B1%EC%9E%90%EC%82%B0%EC%9A%B4%EC%9A%A9"
      }
    },
    {
      "name": "보험서비스손익",
      "ticker": null,
      "category": "사업부문",
      "item": "본업인 생명보험 인수·보장 사업. 2025년 상반기 보험서비스손익 8,313억원으로 전년 동기 대비 16.8% 증가하며 상반기 순이익(1조3,941억원)의 핵심 축을 담당",
      "source": {
        "title": "[스코프노트] 삼성생명 : 보험 손익 성장과 자본 안정성 강화 - Finance Scope",
        "url": "https://www.finance-scope.com/article/view/scp202508260023"
      }
    },
    {
      "name": "투자손익(자산운용)",
      "ticker": null,
      "category": "사업부문",
      "item": "218조원 규모 일반계정 운용자산을 기반으로 한 투자 부문. 2025년 상반기 투자손익 1조207억원, 운용자산이익률 3.29% 기록(채권·대출 등 이자수익자산 비중 약 68%)",
      "source": {
        "title": "[스코프노트] 삼성생명 : 보험 손익 성장과 자본 안정성 강화 - Finance Scope",
        "url": "https://www.finance-scope.com/article/view/scp202508260023"
      }
    }
  ]
},
    {
  "id": "034730",
  "name": "SK",
  "ticker": "034730",
  "dartStockCodes": [
    "034730"
  ],
  "market": "KOSPI",
  "type": "domestic",
  "sector": "지주회사",
  "oneLiner": "SK그룹 사업지주회사, 반도체·에너지·통신 자회사를 관리",
  "note": "SK는 자체 제조 사업 없이 SK하이닉스, SK이노베이션 등 자회사 지분 보유와 배당·지분법 이익이 실적의 핵심인 사업 지주회사입니다. 그래서 부품 협력사 대신 그룹 내 핵심 자회사와 지분율로 사업구조를 정리했습니다.",
  "suppliers": [
    {
      "name": "SK하이닉스",
      "ticker": "000660",
      "category": "계열사",
      "item": "반도체 제조·판매 자회사. SK스퀘어를 통해 지분 20.1% 보유(SK그룹 실적 기여도가 가장 큰 핵심 계열사)",
      "source": {
        "title": "SK주식회사 - 나무위키",
        "url": "https://namu.wiki/w/SK%EC%A3%BC%EC%8B%9D%ED%9A%8C%EC%82%AC"
      }
    },
    {
      "name": "SK이노베이션",
      "ticker": "096770",
      "category": "계열사",
      "item": "석유·화학·자원개발 사업 자회사. SK㈜가 지분 33.4% 보유",
      "source": {
        "title": "SK주식회사 - 나무위키",
        "url": "https://namu.wiki/w/SK%EC%A3%BC%EC%8B%9D%ED%9A%8C%EC%82%AC"
      }
    },
    {
      "name": "SK텔레콤",
      "ticker": "017670",
      "category": "계열사",
      "item": "이동통신 사업 자회사. SK㈜가 지분 26.78% 보유",
      "source": {
        "title": "SK주식회사 - 나무위키",
        "url": "https://namu.wiki/w/SK%EC%A3%BC%EC%8B%9D%ED%9A%8C%EC%82%AC"
      }
    },
    {
      "name": "SK E&S",
      "ticker": null,
      "category": "계열사",
      "item": "도시가스·에너지 사업 비상장 자회사. SK㈜가 지분 90% 보유",
      "source": {
        "title": "SK주식회사 - 나무위키",
        "url": "https://namu.wiki/w/SK%EC%A3%BC%EC%8B%9D%ED%9A%8C%EC%82%AC"
      }
    },
    {
      "name": "SKC",
      "ticker": "011790",
      "category": "계열사",
      "item": "석유화학·소재 제조 자회사. SK㈜가 지분 40.64% 보유",
      "source": {
        "title": "SK주식회사 - 나무위키",
        "url": "https://namu.wiki/w/SK%EC%A3%BC%EC%8B%9D%ED%9A%8C%EC%82%AC"
      }
    }
  ]
},
    {
  "id": "086790",
  "name": "하나금융지주",
  "ticker": "086790",
  "dartStockCodes": [
    "086790"
  ],
  "market": "KOSPI",
  "type": "domestic",
  "sector": "금융지주",
  "oneLiner": "하나은행 중심의 종합 금융지주회사",
  "note": "은행에 편중된 수익구조에서 벗어나기 위해 증권·카드·캐피탈 등 비은행 계열사 비중을 확대하고 있으며, 함영주 회장 취임 후 2023년 4.7%까지 떨어졌던 그룹 순이익 내 비은행 비중이 2026년 상반기 18.8%까지 회복됐습니다.",
  "suppliers": [
    {
      "name": "하나은행",
      "ticker": null,
      "category": "계열사",
      "item": "그룹의 핵심 은행 자회사(비상장, 100% 자회사). 2026년 2분기 순이익 1조169억원으로 그룹 실적의 대부분을 차지",
      "source": {
        "title": "하나금융지주 은행 성과 주춤해도 반기 최대 실적 - 허프포스트코리아",
        "url": "https://www.huffingtonpost.kr/article/259035"
      }
    },
    {
      "name": "하나증권",
      "ticker": null,
      "category": "계열사",
      "item": "증권 자회사(비상장). 2026년 2분기 순이익 1,698억원으로 분기 기준 역대 최대치 기록, 비은행 비중 확대를 견인",
      "source": {
        "title": "하나금융지주 은행 성과 주춤해도 반기 최대 실적 - 허프포스트코리아",
        "url": "https://www.huffingtonpost.kr/article/259035"
      }
    },
    {
      "name": "하나카드",
      "ticker": null,
      "category": "계열사",
      "item": "카드 자회사(비상장). 2026년 2분기 순이익 684억원",
      "source": {
        "title": "하나금융지주 은행 성과 주춤해도 반기 최대 실적 - 허프포스트코리아",
        "url": "https://www.huffingtonpost.kr/article/259035"
      }
    },
    {
      "name": "하나캐피탈",
      "ticker": null,
      "category": "계열사",
      "item": "여신전문금융 자회사(비상장). 2026년 2분기 순이익 509억원",
      "source": {
        "title": "하나금융지주 은행 성과 주춤해도 반기 최대 실적 - 허프포스트코리아",
        "url": "https://www.huffingtonpost.kr/article/259035"
      }
    }
  ]
},
    {
  "id": "000810",
  "name": "삼성화재",
  "ticker": "000810",
  "dartStockCodes": [
    "000810"
  ],
  "market": "KOSPI",
  "type": "domestic",
  "sector": "손해보험",
  "oneLiner": "국내 1위 손해보험사, 장기·자동차보험이 주력",
  "note": "손해보험사이므로 부품 협력사 대신 보종별(장기·자동차·일반보험) 보험수익 구성으로 매출구조를 정리했습니다. 2024년에는 21년간 유지하던 방카슈랑스(은행 판매채널)에서 철수하며 GA(법인보험대리점) 중심으로 판매채널을 재편했습니다.",
  "suppliers": [
    {
      "name": "장기보험",
      "ticker": null,
      "category": "사업부문",
      "item": "질병·상해 등 장기보험 부문. 보종별 보험수익 비중 54.8%로 삼성화재 매출의 절반 이상을 차지하는 핵심 부문",
      "source": {
        "title": "삼성화재 - 기업현황 - 기업모니터(WiseReport)",
        "url": "https://comp.wisereport.co.kr/company/c1010001.aspx?cmp_cd=000810"
      }
    },
    {
      "name": "자동차보험",
      "ticker": null,
      "category": "사업부문",
      "item": "보종별 보험수익 비중 30.4%. 2025년 1분기 보험수익 1조3,772억원을 유지했으나 손해율 악화로 보험손익은 299억원(전년 동기 대비 70.9% 감소)에 그침",
      "source": {
        "title": "삼성화재, 1분기 순익 6081억…車보험 부진에 13.2% 감소 - 보험저널",
        "url": "https://www.insjournal.co.kr/news/articleView.html?idxno=26602"
      }
    },
    {
      "name": "일반보험(특종보험 포함)",
      "ticker": null,
      "category": "사업부문",
      "item": "화재·배상책임 등 일반보험 부문. 보종별 보험수익 비중 14.8%",
      "source": {
        "title": "삼성화재 - 기업현황 - 기업모니터(WiseReport)",
        "url": "https://comp.wisereport.co.kr/company/c1010001.aspx?cmp_cd=000810"
      }
    }
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
