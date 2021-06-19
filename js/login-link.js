var link = document.querySelector(".login-link");
var popup = document.querySelector(".personal-account");
var close = document.querySelector(".personal-account__btn-close");
var login = popup.querySelector("[name=login]");

link.addEventListener("click", function (evt) {

  evt.preventDefault();
  popup.classList.add("show-block");
  login.focus();
});

close.addEventListener("click", function (evt) {

  evt.preventDefault();
  popup.classList.remove("show-block");
});