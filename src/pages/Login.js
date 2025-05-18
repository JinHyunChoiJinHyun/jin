
// pages/Login.js

export function renderLoginPage(container) {
  container.innerHTML = ""; // 이전 내용 지우기

  const loginPageWrapper = document.createElement("div");
  loginPageWrapper.className = "login-page-wrapper";

  const loginFormContainer = document.createElement("div");
  loginFormContainer.className = "login-form-container";

  const formTitle = document.createElement("h2");
  formTitle.className = "login-form-title";
  formTitle.textContent = "로그인";

  const formDescription = document.createElement("p");
  formDescription.className = "login-form-description";
  formDescription.textContent = "계정에 로그인하여 모든 기능을 이용하세요.";

  const form = document.createElement("form");
  form.id = "loginForm";
  form.addEventListener("submit", handleLoginSubmit);

  // 이메일 입력 필드
  const emailGroup = document.createElement("div");
  emailGroup.className = "form-group";
  const emailLabel = document.createElement("label");
  emailLabel.htmlFor = "email";
  emailLabel.textContent = "이메일 주소";
  const emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.id = "email";
  emailInput.name = "email";
  emailInput.placeholder = "you@example.com";
  emailInput.required = true;
  emailGroup.appendChild(emailLabel);
  emailGroup.appendChild(emailInput);

  // 비밀번호 입력 필드
  const passwordGroup = document.createElement("div");
  passwordGroup.className = "form-group";
  const passwordLabel = document.createElement("label");
  passwordLabel.htmlFor = "password";
  passwordLabel.textContent = "비밀번호";
  const passwordInput = document.createElement("input");
  passwordInput.type = "password";
  passwordInput.id = "password";
  passwordInput.name = "password";
  passwordInput.placeholder = "••••••••";
  passwordInput.required = true;
  // Caps Lock 감지 이벤트 리스너
  passwordInput.addEventListener("keyup", handleCapsLock);
  passwordGroup.appendChild(passwordLabel);
  passwordGroup.appendChild(passwordInput);

  // Caps Lock 알림
  const capsLockWarning = document.createElement("div");
  capsLockWarning.id = "capsLockWarning";
  capsLockWarning.className = "caps-lock-warning";
  capsLockWarning.style.display = "none"; // 기본 숨김
  capsLockWarning.textContent = "Caps Lock이 켜져 있습니다.";
  passwordGroup.appendChild(capsLockWarning);


  // 추가 옵션 (기억하기, 비밀번호 찾기)
  const extraOptions = document.createElement("div");
  extraOptions.className = "extra-options";
  const rememberMeLabel = document.createElement("label");
  rememberMeLabel.className = "remember-me";
  const rememberMeCheckbox = document.createElement("input");
  rememberMeCheckbox.type = "checkbox";
  rememberMeCheckbox.name = "remember";
  rememberMeLabel.appendChild(rememberMeCheckbox);
  rememberMeLabel.append(" 로그인 상태 유지");
  const forgotPasswordLink = document.createElement("a");
  forgotPasswordLink.href = "#/forgot-password"; // 실제 링크로 변경 필요
  forgotPasswordLink.className = "forgot-password-link";
  forgotPasswordLink.textContent = "비밀번호를 잊으셨나요?";
  extraOptions.appendChild(rememberMeLabel);
  extraOptions.appendChild(forgotPasswordLink);


  // 로그인 버튼
  const loginButton = document.createElement("button");
  loginButton.type = "submit";
  loginButton.className = "login-button primary";
  loginButton.textContent = "로그인";

  // 회원가입 링크
  const signUpPrompt = document.createElement("div");
  signUpPrompt.className = "signup-prompt";
  signUpPrompt.innerHTML = `계정이 없으신가요? <a href="#/signup">회원가입</a>`; // 실제 회원가입 페이지로 연결

  // 폼 요소들 추가
  form.appendChild(emailGroup);
  form.appendChild(passwordGroup);
  form.appendChild(extraOptions);
  form.appendChild(loginButton);

  loginFormContainer.appendChild(formTitle);
  loginFormContainer.appendChild(formDescription);
  loginFormContainer.appendChild(form);
  // 소셜 로그인 구분선 및 버튼 그룹 제거됨
  loginFormContainer.appendChild(signUpPrompt); // 로그인 버튼 다음에 바로 회원가입 프롬프트

  loginPageWrapper.appendChild(loginFormContainer);
  container.appendChild(loginPageWrapper);
}

function handleLoginSubmit(event) {
  event.preventDefault(); // 폼 기본 제출 방지
  const email = event.target.email.value;
  const password = event.target.password.value;
  const rememberMe = event.target.remember.checked;

  console.log("로그인 시도:", { email, password, rememberMe });
  // TODO: 실제 로그인 API 호출 및 로직 구현
  alert(`로그인 시도: ${email} (구현 예정)`);
  // 로그인 성공 시 메인 페이지 또는 이전 페이지로 리다이렉트
  // window.location.hash = "#main";
}

function handleCapsLock(event) {
  const capsLockWarning = document.getElementById("capsLockWarning");
  if (event.getModifierState && event.getModifierState("CapsLock")) {
    capsLockWarning.style.display = "block";
  } else {
    capsLockWarning.style.display = "none";
  }
}
