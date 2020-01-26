var businessButton = document.querySelector(".adding-profile__anchor");
var businessMenu = document.querySelector(".adding-profile__busines");

businessButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  businessMenu.classList.toggle("adding-profile__busines--show");
});

var businessClose = document.querySelector(".adding-profile__close");

businessClose.addEventListener("click", function () {
  businessMenu.classList.remove("adding-profile__busines--show");
});
