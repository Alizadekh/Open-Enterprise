const burger = document.querySelector("#burger");
const menu = document.querySelector(".mobile-menu");

burger.addEventListener("click", function () {
  if (menu.style.transform === "translateX(300px)") {
    menu.style.transform = "translateX(-50px)";
  } else {
    menu.style.transform = "translateX(300px)";
  }
});
