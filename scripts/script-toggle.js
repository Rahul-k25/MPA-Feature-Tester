document.querySelectorAll(".sidebar--item").forEach((button) => {
  button.addEventListener("click", () => {
    const sidebar = button.parentElement;
    sidebar.querySelectorAll(".sidebar--item").forEach((btn) => {
      btn.classList.remove("button--active");
    });
    button.classList.add("button--active");
  });
});

window.onload = function () {
  let toggleOpen = document.querySelector(".sidebar-toggle-open");
  let text = document.querySelectorAll(".sidebar-text");
  toggleOpen.addEventListener("click", () => {
    text.forEach((ele) => {
      ele.style.display = "none";
    });
    toggleOpen.classList.toggle("sidebar-toggle-close");
  });

  let toggleClose = document.querySelector(".sidebar-toggle-close");
  text = document.querySelectorAll(".sidebar-text");
  if (toggleClose) {
    console.log("wqe");
    toggleClose.addEventListener("click", () => {
      text.forEach((ele) => {
        ele.style.display = "block";
      });
    });
  }
};
