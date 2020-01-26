var choose = document.querySelector(".add-plan__choose-country");
var dropMenu = document.querySelector(".add-plan__drop-menu");

choose.addEventListener("click", function () {
  choose.classList.toggle("add-plan__choose-country--opened");
  dropMenu.classList.toggle("add-plan__drop-menu--opened");
});
