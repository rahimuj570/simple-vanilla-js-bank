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

/* ------------------------
-------Deposit Page JS
--------------------------- */
function depositBtn() {
  let depoField = document.querySelector(".depo-field").value;
  let newDepositAmount = parseFloat(depoField);

  let prevDepositAmount = parseFloat(
    document.getElementById("depoAmount").innerText
  );
  let totalDepositAmount = prevDepositAmount + newDepositAmount;
  document.getElementById("depoAmount").innerText = totalDepositAmount;
  document.querySelector(".depo-field").value = "";
  document.querySelector(".totalCard").innerText = totalDepositAmount;
}

/* ------------------------
-------Withdraw Page JS
--------------------------- */

function withdrawBtn() {
  let withdraField = document.querySelector(".withdraw-field").value;
  let newWithdrawAmount = parseFloat(withdraField);
  let prevWithdrawAmount = parseFloat(
    document.getElementById("withdrawCard").innerText
  );
  let totalWithdrawAmount = prevWithdrawAmount - newWithdrawAmount;
  document.getElementById("withdrawCard").innerText = totalWithdrawAmount;
  document.querySelector(".withdraw-field").value = "";
  document.querySelector(".totalCard").innerText =
    parseFloat(document.getElementById("depoAmount").innerText) +
    totalWithdrawAmount;
}
