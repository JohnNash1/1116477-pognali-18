var menuButton = document.querySelector(".main-navigation__toggle");
var menu = document.querySelector(".main-navigation");
var header = document.querySelector(".page-header");
var logo = document.querySelector(".page-header__logo-image");

menu.classList.remove("main-navigation--nojs");
menuButton.addEventListener("click", function () {
  if (menu.classList.contains("main-navigation--closed")) {
    menu.classList.remove("main-navigation--closed");
    menu.classList.add("main-navigation--opened");
    header.classList.add("page-header--menu-opened");
    logo.setAttribute("src", "img/logo-mobile-blue@1x.png");
  }
  else {
    menu.classList.remove("main-navigation--opened");
    menu.classList.add("main-navigation--closed");
    header.classList.remove("page-header--menu-opened");
    logo.setAttribute("src", "img/logo-mobile-white@1x.png");
  };
});
