// SHOW HEADER MENU
function showMenu(menuId, toggleId) {
  const menu = document.getElementById(menuId);
  const toggle = document.getElementById(toggleId);

  if (menu && toggle) {
    toggle.onclick = () => {
      menu.classList.toggle("show-menu");
    };
  }
}
showMenu("nav-menu", "nav-toggle");

// LINK MENU ACTIVE
const navLink = document.querySelectorAll(".nav__link");
function linkActive() {
  navLink.forEach((e) => e.classList.remove("active"));
  this.classList.add("active");
}
navLink.forEach((e) => e.addEventListener("click", linkActive));

// STICKY HEADER
const scrollY = window.pageYOffset;
function scrollActive() {
  const header = document.getElementById("header");

  this.scrollY >= 10
    ? header.classList.add("scroll-active")
    : header.classList.remove("scroll-active");
}
window.addEventListener("scroll", scrollActive);

// SCROLL REVEAL ANIMATED
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: "2000",
});

// Header Animated
sr.reveal(".nav__logo");
sr.reveal(".nav__item", { interval: "200", delay: "200" });
sr.reveal(".nav__toggle", { delay: "200" });

// Home Animated
sr.reveal(".home__title", { delay: 200 });
sr.reveal(".home__text", { delay: 400 });
sr.reveal(".home__button", { delay: 600 });
sr.reveal(".home__img", { scale: 0.95, delay: 400 });
