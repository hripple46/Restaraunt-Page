function menu() {
  const content = document.querySelector("#content");

  const menuTitle = document.createElement("h1");
  menuTitle.innerText = "MENU";
  content.appendChild(menuTitle);

  const item1 = document.createElement("div");
  item1.setAttribute("class", "menuItem");
  item1.innerText = "Burger";
  content.appendChild(item1);

  const item1cost = document.createElement("div");
  item1cost.setAttribute("class", "menuItem");
  item1cost.innerText = "$20.95";
  item1.appendChild(item1cost);

  const item2 = document.createElement("div");
  item2.setAttribute("class", "menuItem");
  item2.innerText = "Salad";
  content.appendChild(item2);

  const item2cost = document.createElement("div");
  item2cost.setAttribute("class", "menuItem");
  item2cost.innerText = "$20.95";
  item2.appendChild(item2cost);

  const item3 = document.createElement("div");
  item3.setAttribute("class", "menuItem");
  item3.innerText = "Pasta";
  content.appendChild(item3);

  const item3cost = document.createElement("div");
  item3cost.setAttribute("class", "menuItem");
  item3cost.innerText = "$20.95";
  item3.appendChild(item3cost);
}
export default menu;
