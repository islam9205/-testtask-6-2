var mapLink = document.querySelector(".contacts__link");
var mapPopup = document.querySelector(".map");
var mapClose = document.querySelector(".map__btn-close");

mapLink.addEventListener("click", function (evt) {

  evt.preventDefault();
  mapPopup.classList.add("show-block");
});

mapClose.addEventListener("click", function (evt) {

  evt.preventDefault();
  mapPopup.classList.remove("show-block");
});