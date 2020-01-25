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
    logo.setAttribute("srcset", "img/logo-mobile-blue@2x.png");
    logoTablet.setAttribute("srcset", "img/logo-tablet-blue@1x.png");
  }
  else {
    menu.classList.remove("main-navigation--opened");
    menu.classList.add("main-navigation--closed");
    header.classList.remove("page-header--menu-opened");
    logo.setAttribute("src", "img/logo-mobile-white@1x.png");
    logo.setAttribute("srcset", "img/logo-mobile-white@2x.png");
    logoTablet.setAttribute("srcset", "img/logo-tablet-white@1x.png");
  };
});

var filterButton = document.querySelector(".catalog-filter__button");
var filterMenu = document.querySelector(".catalog-filter__wrapper");
var catalogFilter = document.querySelector(".catalog-filter");

if (filterButton) {
  filterButton.addEventListener("click", function () {
    if (filterMenu.classList.contains("catalog-filter__wrapper--closed")) {
      filterMenu.classList.remove("catalog-filter__wrapper--closed");
      filterMenu.classList.add("catalog-filter__wrapper--opened");
      catalogFilter.classList.add("catalog-filter--opened");
    }
    else {
      filterMenu.classList.remove("catalog-filter__wrapper--opened");
      filterMenu.classList.add("catalog-filter__wrapper--closed");
      catalogFilter.classList.remove("catalog-filter--opened");
    };
  });

  var filterCloseButton = document.querySelector(".catalog-filter__close-button");

  filterCloseButton.addEventListener("click", function () {
    filterMenu.classList.remove("catalog-filter__wrapper--opened");
    filterMenu.classList.add("catalog-filter__wrapper--closed");
    catalogFilter.classList.remove("catalog-filter--opened");
  });
};


var hobbyButton = document.querySelector(".filter-group__hobby-button");
var hobbyWrapper = document.querySelector(".filter-group__hobby-wrapper");

if(hobbyButton) {
  hobbyButton.addEventListener("click", function () {
    hobbyWrapper.classList.toggle("filter-group__wrapper--closed");
    if (hobbyButton.classList.contains("filter-group__button--opened")) {
      hobbyButton.classList.remove("filter-group__button--opened");
    }
    else {
      hobbyButton.classList.add("filter-group__button--opened");
    };
  });
};


var musicButton = document.querySelector(".filter-group__music-button");
var musicWrapper = document.querySelector(".filter-group__music-wrapper");

if (musicButton) {
  musicButton.addEventListener("click", function () {
    musicWrapper.classList.toggle("filter-group__wrapper--closed");
    if (musicButton.classList.contains("filter-group__button--opened")) {
      musicButton.classList.remove("filter-group__button--opened");
    }
    else {
      musicButton.classList.add("filter-group__button--opened");
    };
  });
};


var foodButton = document.querySelector(".filter-group__food-button");
var foodWrapper = document.querySelector(".filter-group__food-wrapper");

if (foodButton) {
  foodButton.addEventListener("click", function () {
    foodWrapper.classList.toggle("filter-group__wrapper--closed");
    if (foodButton.classList.contains("filter-group__button--opened")) {
      foodButton.classList.remove("filter-group__button--opened");
    }
    else {
      foodButton.classList.add("filter-group__button--opened");
    };
  });
};
