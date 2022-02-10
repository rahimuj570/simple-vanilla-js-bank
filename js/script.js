// home page & login
const emailInput = document.querySelector(".email-field");
const passwordInput = document.querySelector(".password-field");
const loginBtn = document.querySelector(".login-btn");
loginBtn.addEventListener("click", function () {
  if (emailInput.value === "daddy@bank.com" && passwordInput.value === "1234") {
    window.location.href = "deposit.html";
  } else {
    alert("Incorrect Email or Password");
  }
});
