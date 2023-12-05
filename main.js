document.addEventListener("DOMContentLoaded", function () {
  let passwordInput = document.querySelector("#password");
  let confirmPasswordInput = document.querySelector("#confirmPassword");
  let error = document.querySelector("#error");

  function updateError() {
    let password = passwordInput.value;
    let confirmPassword = confirmPasswordInput.value;

    if (password !== confirmPassword) {
      error.innerHTML = "*Passwords do not match";
    } else {
      error.innerHTML = "";
    }
  }

  passwordInput.addEventListener("input", updateError);
  confirmPasswordInput.addEventListener("input", updateError);
});
