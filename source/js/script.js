var menuButton = document.querySelector(".main-navigation__toggle");
var menu = document.querySelector(".main-navigation");
var header = document.querySelector(".page-header");
var logo = document.querySelector(".page-header__logo-image");
var logoTablet = document.querySelector(".page-header__logo-tablet");

menu.classList.remove("main-navigation--nojs");
menuButton.addEventListener("click", function () {
  if (menu.classList.contains("main-navigation--closed")) {
    menu.classList.remove("main-navigation--closed");
    menu.classList.add("main-navigation--opened");
    header.classList.add("page-header--menu-opened");
    logo.setAttribute("src", "img/logo-mobile-blue@1x.png");
    logoTablet.setAttribute("srcset", "img/logo-tablet-blue@1x.png");
  }
  else {
    menu.classList.remove("main-navigation--opened");
    menu.classList.add("main-navigation--closed");
    header.classList.remove("page-header--menu-opened");
    logo.setAttribute("src", "img/logo-mobile-white@1x.png");
    logoTablet.setAttribute("srcset", "img/logo-tablet-white@1x.png");
  };
});

var filterButton = document.querySelector(".catalog-filter__button");
var filterMenu = document.querySelector(".catalog-filter__countries-wrapper");

filterButton.addEventListener("click", function () {
  if (filterMenu.classList.contains("visually-hidden")) {
    filterMenu.classList.remove("visually-hidden");
    filterButton.classList.add("catalog-filter__button--opened");
  }
  else {
    filterMenu.classList.add("visually-hidden");
    filterButton.classList.remove("catalog-filter__button--opened");
  }
});
