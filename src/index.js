import homePage from "./homePage";
import schedulePage from "./schedule";
import createHeader from "./navBar";
import menu from "./menu";

document.onload = homePage();
if (homePage) {
  createHeader();
}

let navSchedule = document.querySelector("#schedule");
if (navSchedule) {
  navSchedule.addEventListener("click", () => {
    document.querySelector("#content").innerHTML = "";

    schedulePage();
  });
}
let homePageBtn = document.querySelector("#homePageBtn");
if (homePageBtn) {
  homePageBtn.addEventListener("click", () => {
    document.querySelector("#content").innerHTML = "";
    homePage();
  });
}

let menuBtn = document.querySelector("#menuBtn");
if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    document.querySelector("#content").innerHTML = "";
    menu();
  });
}
