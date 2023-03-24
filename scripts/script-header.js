document.addEventListener("DOMContentLoaded", function (event) {
  const showNavbar = (toggleId, navId, bodyId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);
    const bodypd = document.getElementById(bodyId);
    if (toggle && nav && bodypd) {
      toggle.addEventListener("click", () => {
        nav.classList.toggle("show");
        toggle.classList.toggle("bx-x");
        bodypd.classList.toggle("body-pd");
      });
    }
  };

  showNavbar("header-toggle", "side-bar", "body-pd");

  const linkColor = document.querySelectorAll(".nav_link");

  function colorLink() {
    if (linkColor) {
      linkColor.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
    }
  }
  linkColor.forEach((l) => l.addEventListener("click", colorLink));
});
