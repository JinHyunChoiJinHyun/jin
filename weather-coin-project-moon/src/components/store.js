
// components/store.js

// 테마 설정을 가져오는 헬퍼 함수
const getThemePreference = () => localStorage.getItem("theme") === "dark";

// 테마 아이콘을 업데이트하는 함수 (수정됨: localStorage에서 직접 테마 상태 확인)
function updateThemeIcon() {
  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    const isDark = getThemePreference(); // 현재 테마 설정을 가져옴
    themeToggle.textContent = isDark ? "☀️" : "🌙"; // 아이콘 설정
  }
}

// 테마를 토글하는 함수 (수정됨)
export function toggleTheme() {
  const body = document.body;
  // 현재 상태를 기준으로 다음 상태 결정
  const newIsDark = !body.classList.contains("dark-mode");

  body.classList.toggle("dark-mode", newIsDark); // body 클래스 명시적으로 설정
  localStorage.setItem("theme", newIsDark ? "dark" : "light"); // localStorage 업데이트

  // 다른 컴포넌트 알림용 커스텀 이벤트 (필요한 경우 detail에 상태 전달)
  const themeChangeEvent = new CustomEvent("themeUpdate", {
    bubbles: true,
    composed: true,
    detail: { isDark: newIsDark },
  });
  document.dispatchEvent(themeChangeEvent);

  updateThemeIcon(); // 아이콘 즉시 업데이트
}

// 페이지 로드 또는 변경 시 테마를 적용하는 함수
export function applyTheme() {
  const isDarkMode = getThemePreference();
  document.body.classList.toggle("dark-mode", isDarkMode);
  updateThemeIcon(); // 테마 적용 시 아이콘도 업데이트
}

// 네비게이션 바 설정 함수
export function setupNavbar() {
  const navbar = document.createElement("nav");
  navbar.className = "navbar";

  const container = document.createElement("div");
  container.className = "container";

  // 로고
  const logo = document.createElement("div");
  logo.className = "logo";
  logo.textContent = "매수하기 딱 좋은 날씨네!?";
  logo.addEventListener("click", () => (window.location.hash = ""));

  // 네비게이션 링크
  const navLinks = document.createElement("div");
  navLinks.className = "nav-links";
  ["메인", "수익률 예측", "종목토론"].forEach((text, index) => {
    const a = document.createElement("a");
    a.textContent = text;
    a.href = `#${["main", "prediction", "discussion"][index]}`;
    navLinks.appendChild(a);
  });

  // 검색 및 로그인 영역
  const searchBox = document.createElement("div");
  searchBox.className = "search-login";

  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.placeholder = "검색...";

  const searchActionBtn = document.createElement("button");
  searchActionBtn.textContent = "검색";

  const themeToggle = document.createElement("button");
  themeToggle.id = "theme-toggle";
  themeToggle.addEventListener("click", toggleTheme);

  const loginBtn = document.createElement("button");
  loginBtn.textContent = "로그인";
  loginBtn.id = "navbar-login-button";
  // ✅ 로그인 버튼 클릭 시 #/login 으로 이동
  loginBtn.addEventListener("click", () => {
    window.location.hash = "#/login";
  });

  searchBox.append(searchInput, searchActionBtn, themeToggle, loginBtn);

  container.append(logo, navLinks, searchBox);
  navbar.appendChild(container);

  document.body.insertBefore(navbar, document.body.firstChild);

  applyTheme(); 
}
