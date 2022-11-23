import { head } from "lodash";

function createHeader() {
  const header = document.createElement("div");
  header.setAttribute("id", "headerNav");
  document.body.appendChild(header);

  const navigation = document.createElement("button");
  navigation.innerHTML = "Schedule";
  navigation.setAttribute("id", "schedule");
  header.appendChild(navigation);

  const homePageBtn = document.createElement("button");
  homePageBtn.setAttribute("id", "homePageBtn");

  homePageBtn.innerHTML = "Home Page";
  header.appendChild(homePageBtn);

  const menuBtn = document.createElement("button");
  menuBtn.setAttribute("id", "menuBtn");
  menuBtn.innerHTML = "Menu";
  header.appendChild(menuBtn);
}
export default createHeader;
