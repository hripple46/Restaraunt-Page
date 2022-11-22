import homePage from "./homePage";
import schedulePage from "./schedule";

document.onload = homePage();

let navSchedule = document.querySelector("#schedule");
if (navSchedule) {
  navSchedule.addEventListener("click", () => {
    document.querySelector("#content").innerHTML = "";

    schedulePage();
  });
}
