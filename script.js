"use strict";

const menu = document.getElementById("menu_toggle");
const navbar = document.getElementById("header_menu");

menu.addEventListener("click", () => {
  navbar.classList.toggle("header__nav--open");
  menu.classList.toggle("header__menu-toggle--open");
});

const links = navbar.querySelectorAll(".header__link");
links.forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("header__nav--open");
    menu.classList.remove("header__menu-toggle--open");
  });
});
