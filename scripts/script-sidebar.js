document.addEventListener("DOMContentLoaded", function () {
  showNavbar("header-toggle", "side-bar");
  const linkColor = document.querySelectorAll(".nav_link");
  
  linkColor.forEach((l) => l.addEventListener("click", colorLink.bind(null, linkColor)));

  const header_toggle = document.querySelector("#header-toggle");
  const expand = document.querySelector(".svg-expand");
  header_toggle.addEventListener("click", () => {
    expand.classList.toggle("rotate-icon");
  });
});

const showNavbar = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);
  toggle.addEventListener("click", () => {
    // nav.classList.toggle("show");
  });
};

function colorLink(linkColor) {
  if (linkColor) {
    linkColor.forEach((l) => l.classList.remove("active"));
    this.classList.add("active");
  }
}