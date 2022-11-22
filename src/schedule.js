function schedulePage() {
  const content = document.querySelector("#content");

  const displaySchedule = document.createElement("h1");
  displaySchedule.innerHTML = "SCHEDULE: ";

  content.appendChild(displaySchedule);
}
export default schedulePage;
