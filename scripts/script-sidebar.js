document.addEventListener("DOMContentLoaded", function (event) {
  const showNavbar = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId);
    const sidebarTitle = document.querySelector(".sidebar__title");
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
      // if(sidebarTitle.innerHTML === "Feature Tester") sidebarTitle.innerHTML = "FT";
      // else sidebarTitle.innerHTML = "Feature Tester"
    });
  };

  showNavbar("header-toggle", "side-bar");
  const linkColor = document.querySelectorAll(".nav_link");

  function colorLink() {
    if (linkColor) {
      linkColor.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
    }
  }
  linkColor.forEach((l) => l.addEventListener("click", colorLink));

  const header_toggle = document.querySelector("#header-toggle");
  const expand = document.querySelector(".svg-expand");
  header_toggle.addEventListener("click", () => {
    expand.classList.toggle("rotate-icon");
  });
});
