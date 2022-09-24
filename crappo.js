const navBtn = document.querySelector(".btn-icon");
const closeBtn = document.querySelector(".close-btn");
console.log(closeBtn);
const sideBar = document.querySelector(".side-bar");

navBtn.addEventListener("click", function () {
  ShowSideBar = sideBar.classList.contains("show-sidebar");
  if (!ShowSideBar) {
    sideBar.classList.add("show-sidebar");
  }
});

closeBtn.addEventListener("click", function () {
  ShowSideBar = sideBar.classList.contains("show-sidebar");
  if (ShowSideBar) {
    sideBar.classList.remove("show-sidebar");
  }
  console.log(closeBtn);
});
