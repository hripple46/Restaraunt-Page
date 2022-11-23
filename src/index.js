import homePage from "./homePage";
import schedulePage from "./schedule";
import createHeader from "./navBar";

document.onload = homePage();
if (homePage) {
  createHeader();
}

let navSchedule = document.querySelector("#schedule");
if (navSchedule) {
  navSchedule.addEventListener("click", () => {
    document.querySelector("#content").innerHTML = "";

    schedulePage();
    let homePageBtn = document.querySelector("homePageBtn");
    if (homePageBtn) {
      homePageBtn.addEventListener("click", () => {
        homePage();
      });
    }
  });
}
