function homePage() {
  const content = document.querySelector("#content");

  const headerTitle = document.createElement("h1");
  headerTitle.innerHTML = "Henry's Bar and Grill";

  content.appendChild(headerTitle);

  const subHeader = document.createElement("h2");
  subHeader.innerHTML = "Home of the World's Best Burger";

  content.appendChild(subHeader);

  const reviews = document.createElement("p");
  reviews.innerText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam interdum condimentum mollis. Quisque pellentesque at quam ut ornare. Morbi imperdiet vitae ipsum non suscipit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed aliquet, nisl et scelerisque pretium, lorem est iaculis augue, at gravida odio urna in elit. Integer pretium ornare imperdiet. Praesent eget dictum tellus, id ullamcorper augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed aliquam mauris in mauris dapibus consectetur. Cras rhoncus interdum ultrices. Sed non felis a ligula mollis pharetra. Vestibulum et dignissim lacus, ac pharetra quam. Proin luctus, dolor non dignissim euismod, sem diam congue turpis, tempus commodo velit sem ac sem. Vivamus";

  content.appendChild(reviews);
}

export default homePage;
