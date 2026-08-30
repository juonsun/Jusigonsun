/* ===================== 공급망지도 (SupplyMap) — 앱 로직 ===================== */

(function () {
  const DATA = SUPPLY_CHAIN_DATA;
  const ALL_COMPANIES = [...DATA.companies, ...DATA.globalBuyers];
  const root = document.getElementById("app");

  let state = { query: "", type: "all" }; // type: all | domestic | global
  let DISCLOSURES = { items: [], generatedAt: null }; // DART 공시 데이터 (비동기 로드)

  // disclosures.json은 GitHub Actions가 주기적으로 갱신합니다.
  // 로컬에서 파일을 직접 열었거나(file://), 아직 한 번도 생성되지 않은
  // 경우에는 조용히 실패하고 빈 목록으로 둡니다(사이트 동작에는 영향 없음).
  async function loadDisclosures() {
    try {
      const res = await fetch("disclosures.json", { cache: "no-store" });
      if (!res.ok) return;
      const json = await res.json();
      DISCLOSURES = json;
    } catch (e) {
      // file:// 로 열었거나 네트워크 오류 — 무시하고 정적 데이터만 표시
    }
  }

  function esc(str) {
    return String(str).replace(/[&<>"']/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[c]));
  }

  function initials(name) {
    return name.replace(/\(.*?\)/g, "").trim().slice(0, 2);
  }

  function badge(cat) {
    return `<span class="badge" data-cat="${cat}"><span class="badge-dot" data-cat="${cat}"></span>${cat}</span>`;
  }

  /* ---------------- ROUTER ---------------- */
  function router() {
    const hash = location.hash.replace(/^#\/?/, "");
    const [path, param] = hash.split("/");
    window.scrollTo(0, 0);
    if (!path || path === "" || path === "home") {
      renderHome();
    } else if (path === "company" && param) {
      renderDetail(param);
    } else if (path === "about") {
      renderAbout();
    } else if (path === "privacy") {
      renderPrivacy();
    } else if (path === "contact") {
      renderContact();
    } else {
      renderHome();
    }
    highlightNav(path || "home");
  }

  function highlightNav(path) {
    document.querySelectorAll(".site-nav a").forEach((a) => {
      a.classList.toggle("active", a.dataset.route === path || (path === "home" && a.dataset.route === "home"));
    });
  }

  /* ---------------- HOME ---------------- */
  function renderHome() {
    const q = state.query.trim().toLowerCase();

    const filterList = (list) =>
      list.filter((c) => {
        const matchesType = state.type === "all" || c.type === state.type;
        if (!matchesType) return false;
        if (!q) return true;
        const haystack = (
          c.name + " " + c.sector + " " + c.oneLiner + " " +
          c.suppliers.map((s) => s.name + " " + s.item).join(" ")
        ).toLowerCase();
        return haystack.includes(q);
      });

    const domesticList = filterList(DATA.companies);
    const globalList = filterList(DATA.globalBuyers);

    root.innerHTML = `
      <section class="hero">
        <h1>국내 주요 대기업 공급망 지도</h1>
        <p>삼성전자·SK하이닉스·현대차 등 코스피 대표 기업과, 애플·테슬라처럼 한국 기업을 공급망에 둔
        글로벌 대기업의 협력사·납품업체 정보를 한곳에서 확인하세요. 모든 정보는 출처를 함께 표기합니다.</p>

        <div class="search-box">
          <span class="search-icon">🔍</span>
          <input id="searchInput" type="text" placeholder="기업명, 협력사명, 부품/소재로 검색 (예: 양극재, LG이노텍, HBM)" value="${esc(state.query)}" />
        </div>
        <div class="filter-row" id="typeFilter">
          <button class="chip-btn ${state.type === "all" ? "active" : ""}" data-type="all">전체</button>
          <button class="chip-btn ${state.type === "domestic" ? "active" : ""}" data-type="domestic">국내 대기업</button>
          <button class="chip-btn ${state.type === "global" ? "active" : ""}" data-type="global">글로벌 기업(한국 협력사)</button>
        </div>
      </section>

      ${state.type !== "global" ? `
      <div class="section-title">
        <h2>국내 대기업</h2>
        <span class="hint">${domesticList.length}개 기업</span>
      </div>
      <div class="company-grid">${domesticList.map(companyCard).join("") || emptyState()}</div>
      ` : ""}

      ${state.type !== "domestic" ? `
      <div class="section-title">
        <h2>글로벌 대기업 · 한국 협력사</h2>
        <span class="hint">${globalList.length}개 기업</span>
      </div>
      <div class="company-grid">${globalList.map(companyCard).join("") || emptyState()}</div>
      ` : ""}
    `;

    document.getElementById("searchInput").addEventListener("input", (e) => {
      state.query = e.target.value;
      renderHome();
      // restore focus & caret since we re-render the whole view
      const input = document.getElementById("searchInput");
      input.focus();
      const val = input.value;
      input.value = "";
      input.value = val;
    });

    document.querySelectorAll("#typeFilter .chip-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.type = btn.dataset.type;
        renderHome();
      });
    });
  }

  function emptyState() {
    return `<div class="empty-state">검색 결과가 없습니다. 다른 키워드로 검색해보세요.</div>`;
  }

  function companyCard(c) {
    return `
      <a class="company-card" href="#/company/${encodeURIComponent(c.id)}">
        <div class="company-card-top">
          <div class="company-logo">${esc(initials(c.name))}</div>
          <div>
            <div class="company-name">${esc(c.name)}</div>
            <div class="company-meta">${esc(c.market)} · ${esc(c.ticker)}</div>
          </div>
        </div>
        <div class="company-oneliner">${esc(c.oneLiner)}</div>
        <div class="company-card-foot">
          <span>${esc(c.sector)}</span>
          <span><span class="supplier-count">${c.suppliers.length}</span>건의 관련 정보 수록</span>
        </div>
      </a>
    `;
  }

  /* ---------------- DETAIL ---------------- */
  function renderDetail(id) {
    const c = ALL_COMPANIES.find((x) => x.id === decodeURIComponent(id));
    if (!c) {
      root.innerHTML = `<div class="empty-state">기업 정보를 찾을 수 없습니다. <a href="#/home">홈으로 돌아가기</a></div>`;
      return;
    }

    // group suppliers by category, preserving category slot order
    const catOrder = Object.keys(DATA.categories).sort(
      (a, b) => DATA.categories[a].slot - DATA.categories[b].slot
    );
    const groups = {};
    c.suppliers.forEach((s) => {
      groups[s.category] = groups[s.category] || [];
      groups[s.category].push(s);
    });

    root.innerHTML = `
      <div class="breadcrumb"><a href="#/home">공급망지도</a> / ${esc(c.name)}</div>

      <div class="detail-hero">
        <div class="company-logo">${esc(initials(c.name))}</div>
        <div>
          <h1>${esc(c.name)}</h1>
          <div class="detail-tags">
            <span>${esc(c.market)}</span>
            <span>${esc(c.ticker)}</span>
            <span>${esc(c.sector)}</span>
            <span>관련 정보 ${c.suppliers.length}건 수록</span>
          </div>
          <div class="detail-oneliner">${esc(c.oneLiner)}</div>
          ${c.note ? `<div class="detail-note">💡 ${esc(c.note)}</div>` : ""}
        </div>
      </div>

      <div class="legend-row">
        ${catOrder.filter((cat) => groups[cat]).map((cat) => badge(cat)).join("")}
      </div>

      ${catOrder
        .filter((cat) => groups[cat])
        .map((cat) => renderCategoryGroup(cat, groups[cat]))
        .join("")}

      ${renderDisclosureSection(c)}

      <div class="detail-note" style="margin-top:28px;">
        ⚠️ 본 정보는 언론 보도 및 공개 자료를 바탕으로 정리한 참고 자료이며, 투자 권유 목적이 아닙니다.
        실제 거래 비중·계약 여부는 변동될 수 있으니 <a href="https://dart.fss.or.kr" target="_blank" rel="noopener" style="color:var(--series-1)">전자공시시스템(DART)</a> 등 1차 출처를 통해 반드시 확인하세요.
      </div>
    `;
  }

  /* ---------------- DART 공시 섹션 ---------------- */
  function renderDisclosureSection(c) {
    // 애플/테슬라 등 국내 상장사가 아닌 기업은 DART 대상이 아니므로 섹션을 표시하지 않음
    if (!c.dartStockCodes || !c.dartStockCodes.length) return "";

    const items = (DISCLOSURES.items || []).filter((d) => c.dartStockCodes.includes(d.stockCode));

    if (!items.length) {
      return `
        <div class="cat-group">
          <div class="cat-group-head"><h3>최근 관련 공시 (DART)</h3></div>
          <div class="detail-note">
            아직 연동된 공시 데이터가 없습니다. DART Open API 인증키를 발급받아
            <code>scripts/fetch-disclosures.js</code>를 실행하거나 GitHub Actions 자동화를 설정하면
            "단일판매·공급계약체결" 등 관련 공시가 이 자리에 최신순으로 표시됩니다.
          </div>
        </div>
      `;
    }

    return `
      <div class="cat-group">
        <div class="cat-group-head">
          <h3>최근 관련 공시 (DART)</h3>
          <span class="count">${items.length}건 · 최근 ${DISCLOSURES.lookbackDays || 90}일</span>
        </div>
        <table class="supplier-table">
          <thead>
            <tr>
              <th style="width:16%">접수일</th>
              <th style="width:44%">보고서명</th>
              <th style="width:20%">제출인</th>
              <th style="width:20%">원문</th>
            </tr>
          </thead>
          <tbody>
            ${items.map((d) => `
              <tr>
                <td data-label="접수일" class="supplier-ticker">${esc(formatDate(d.receiptDate))}</td>
                <td data-label="보고서명" class="supplier-name">${esc(d.reportName)}</td>
                <td data-label="제출인">${esc(d.filerName || "-")}</td>
                <td data-label="원문"><a class="source-link" href="${esc(d.url)}" target="_blank" rel="noopener">DART 원문 보기 ↗</a></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
        ${DISCLOSURES.generatedAt ? `<div class="company-meta" style="margin-top:8px;">마지막 갱신: ${esc(formatDateTime(DISCLOSURES.generatedAt))}</div>` : ""}
      </div>
    `;
  }

  function formatDate(yyyymmdd) {
    if (!yyyymmdd || yyyymmdd.length !== 8) return yyyymmdd || "-";
    return `${yyyymmdd.slice(0, 4)}.${yyyymmdd.slice(4, 6)}.${yyyymmdd.slice(6, 8)}`;
  }

  function formatDateTime(isoStr) {
    try {
      return new Date(isoStr).toLocaleString("ko-KR", { timeZone: "Asia/Seoul" });
    } catch (e) {
      return isoStr;
    }
  }

  function renderCategoryGroup(cat, items) {
    const catDef = DATA.categories[cat] || {};
    const nameHeader = catDef.nameHeader || "협력사";
    const itemHeader = catDef.itemHeader || "공급 품목";
    return `
      <div class="cat-group">
        <div class="cat-group-head">
          ${badge(cat)}
          <span class="count">${items.length}건 · ${esc(catDef.desc || "")}</span>
        </div>
        <table class="supplier-table">
          <thead>
            <tr>
              <th style="width:22%">${esc(nameHeader)}</th>
              <th style="width:12%">종목코드</th>
              <th style="width:36%">${esc(itemHeader)}</th>
              <th style="width:30%">출처</th>
            </tr>
          </thead>
          <tbody>
            ${items.map((s) => `
              <tr>
                <td data-label="${esc(nameHeader)}" class="supplier-name">${esc(s.name)}</td>
                <td data-label="종목코드" class="supplier-ticker">${s.ticker ? esc(s.ticker) : "비상장/계열 비공개"}</td>
                <td data-label="${esc(itemHeader)}">${esc(s.item)}</td>
                <td data-label="출처"><a class="source-link" href="${esc(s.source.url)}" target="_blank" rel="noopener">${esc(s.source.title)} ↗</a></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `;
  }

  /* ---------------- ABOUT ---------------- */
  function renderAbout() {
    root.innerHTML = `
      <div class="hero">
        <h1>소개 및 안내</h1>
      </div>
      <div class="prose">
        <h2>이 사이트는 무엇인가요?</h2>
        <p>공급망지도(SupplyMap)는 삼성전자, SK하이닉스, 현대차·기아 등 국내 주요 대기업과,
        애플·테슬라처럼 한국 기업을 협력사로 둔 글로벌 대기업의 공급망 정보를 정리해 보여주는 참고용 정보 사이트입니다.
        주식 투자자들이 특정 대기업의 실적 변화가 어떤 협력사·부품주에 영향을 줄 수 있는지 한눈에 파악할 수 있도록 돕는 것을 목표로 합니다.</p>

        <h2>데이터는 어디서 가져오나요?</h2>
        <p>각 협력사 정보는 전자공시시스템(DART), 언론 보도, 기업 공식 발표(보도자료, 지속가능경영보고서 등)를 바탕으로 정리했습니다.
        각 항목마다 원문 출처 링크를 함께 표기했으니, 더 자세한 내용이나 최신 정보가 필요하면 출처 링크를 눌러 원문을 확인해주세요.</p>

        <h2>투자 유의사항</h2>
        <div class="disclaimer-box">
          이 사이트에서 제공하는 정보는 투자 판단을 돕기 위한 참고 자료일 뿐, 특정 종목의 매수·매도를 권유하는 것이 아닙니다.
          기업 간 거래 관계, 공급 비중, 계약 조건은 시점에 따라 달라질 수 있으며, 일부 정보는 언론 보도 시점의 정보로 현재와 다를 수 있습니다.
          투자에 대한 최종 책임은 투자자 본인에게 있으며, 실제 투자 결정 전에는 반드시 기업의 공시자료와 IR 자료를 직접 확인하시기 바랍니다.
          본 사이트는 투자 자문업이나 금융 서비스를 제공하지 않습니다.
        </div>

        <h2>데이터 갱신</h2>
        <p>마지막 업데이트: ${esc(DATA.updatedAt)}. 앞으로 다룰 기업과 협력사 정보를 지속적으로 확대할 예정입니다.</p>
      </div>
    `;
  }

  /* ---------------- PRIVACY ---------------- */
  const CONTACT_EMAIL = "juonsun2026@gmail.com";

  function renderPrivacy() {
    root.innerHTML = `
      <div class="hero">
        <h1>개인정보처리방침</h1>
      </div>
      <div class="prose">
        <p>공급망지도(SupplyMap, 이하 "사이트")는 이용자의 개인정보를 소중히 다루며, 관련 법령을 준수합니다.
        이 페이지는 사이트가 어떤 정보를 어떻게 다루는지 안내합니다. 시행일자: ${esc(DATA.updatedAt)}</p>

        <h2>1. 수집하는 개인정보 항목</h2>
        <p>사이트는 회원가입, 로그인, 댓글 등 이용자가 직접 개인정보를 입력하는 기능을 제공하지 않습니다.
        다만 사이트 호스팅 및 운영 과정에서 아래와 같은 정보가 자동으로 수집될 수 있습니다.</p>
        <ul style="padding-left:20px; margin:8px 0;">
          <li>접속 IP 주소, 브라우저 종류 및 버전, 접속 일시, 방문 페이지 등 서비스 이용 기록</li>
          <li>기기 정보(운영체제, 화면 해상도 등)</li>
        </ul>
        <p>이 정보는 호스팅 서비스(GitHub Pages) 및 향후 연동될 수 있는 분석 도구(Google Search Console 등)를 통해 통계적으로만 수집·활용되며, 개인을 특정하는 목적으로 사용하지 않습니다.</p>

        <h2>2. 쿠키 및 광고 서비스 이용 안내</h2>
        <p>사이트는 Google AdSense를 비롯한 광고 서비스를 게재할 수 있습니다. Google 등 광고 제공업체는 쿠키를 사용하여
        이용자가 이 사이트 및 다른 사이트를 방문한 이력을 기반으로 맞춤 광고를 제공할 수 있습니다.</p>
        <ul style="padding-left:20px; margin:8px 0;">
          <li>Google은 광고 쿠키를 사용하여 사용자가 사이트를 방문한 이력을 기반으로 광고를 게재합니다.</li>
          <li>이용자는 <a href="https://adssettings.google.com/authenticated" target="_blank" rel="noopener" style="color:var(--series-1)">Google 광고 설정</a>에서 맞춤 광고를 선택 해제할 수 있습니다.</li>
          <li>제3자 광고 쿠키 사용에 대한 자세한 내용은 <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener" style="color:var(--series-1)">Google의 광고 관련 정책 안내</a>를 참고해주세요.</li>
        </ul>

        <h2>3. 개인정보의 제3자 제공</h2>
        <p>사이트는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만 위 2항에서 안내한 광고 서비스 제공업체가
        광고 게재를 위해 쿠키 등 비식별 정보를 자체적으로 수집·활용할 수 있습니다.</p>

        <h2>4. 개인정보의 보유 및 이용 기간</h2>
        <p>서버 로그 등 자동 수집 정보는 통계 분석 목적을 달성한 후 합리적인 기간 내에 파기하며,
        관련 법령에서 별도로 정한 보존 기간이 있는 경우 이를 따릅니다.</p>

        <h2>5. 이용자의 권리</h2>
        <p>이용자는 언제든지 사이트 운영자에게 자신과 관련된 정보 처리에 대해 문의할 수 있습니다.
        문의는 아래 이메일로 접수해주세요.</p>

        <h2>6. 문의처</h2>
        <p>개인정보처리방침에 대한 문의: <a href="mailto:${esc(CONTACT_EMAIL)}" style="color:var(--series-1)">${esc(CONTACT_EMAIL)}</a></p>

        <h2>7. 고지의 의무</h2>
        <p>이 개인정보처리방침은 법령·정책 또는 사이트 운영상의 필요에 따라 변경될 수 있으며,
        변경 시 이 페이지를 통해 고지합니다.</p>
      </div>
    `;
  }

  /* ---------------- CONTACT ---------------- */
  function renderContact() {
    root.innerHTML = `
      <div class="hero">
        <h1>문의</h1>
        <p>사이트 이용 중 궁금한 점이나 발견하신 오류, 데이터 정정·추가 요청이 있으시면 아래 이메일로 편하게 연락해주세요.</p>
      </div>
      <div class="prose">
        <div class="disclaimer-box" style="font-size:14.5px;">
          📧 <a href="mailto:${esc(CONTACT_EMAIL)}" style="color:var(--series-1); font-weight:700;">${esc(CONTACT_EMAIL)}</a>
        </div>

        <h2>이런 문의를 받고 있어요</h2>
        <p>다음과 같은 내용으로 문의해주시면 빠르게 확인 후 답변 또는 반영해드립니다.</p>
        <ul style="padding-left:20px; margin:8px 0;">
          <li>협력사·공급망 정보의 오류 제보 또는 정정 요청</li>
          <li>새로 다뤄줬으면 하는 기업 추천</li>
          <li>제휴·광고 관련 문의</li>
          <li>저작권 또는 출처 표기 관련 문의</li>
          <li>기타 사이트 이용 관련 문의</li>
        </ul>
        <p>가능한 한 빠르게 답변드리려 노력하지만, 문의량에 따라 답변까지 며칠 정도 소요될 수 있는 점 양해 부탁드립니다.</p>
      </div>
    `;
  }

  /* ---------------- INIT ---------------- */
  window.addEventListener("hashchange", router);

  async function init() {
    await loadDisclosures(); // 실패해도 무시하고 진행 (정적 데이터만으로도 사이트는 완전히 동작)
    router();
  }
  init();
})();
