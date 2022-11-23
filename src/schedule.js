function schedulePage() {
  const content = document.querySelector("#content");

  const displaySchedule = document.createElement("h1");
  displaySchedule.innerHTML = "SCHEDULE: ";

  content.appendChild(displaySchedule);

  const scheduleGrid = document.createElement("div");
  scheduleGrid.setAttribute("id", "scheduleGrid");
  content.appendChild(scheduleGrid);

  const monday = document.createElement("div");
  monday.innerText = "Monday";
  scheduleGrid.appendChild(monday);

  const mondayTime = document.createElement("div");
  mondayTime.innerText = "11:00am - 9:00pm";
  scheduleGrid.appendChild(mondayTime);

  const tuesday = document.createElement("div");
  tuesday.innerText = "Tuesday";
  scheduleGrid.appendChild(tuesday);
  const tuesdayTime = document.createElement("div");
  tuesdayTime.innerText = "11:00am - 9:00pm";
  scheduleGrid.appendChild(tuesdayTime);

  const wednesday = document.createElement("div");
  wednesday.innerText = "Wednesday";
  scheduleGrid.appendChild(wednesday);
  const wednesdayTime = document.createElement("div");
  wednesdayTime.innerText = "11:00am - 9:00pm";
  scheduleGrid.appendChild(wednesdayTime);

  const thursday = document.createElement("div");
  thursday.innerText = "Thursday";
  scheduleGrid.appendChild(thursday);
  const thursdayTime = document.createElement("div");
  thursdayTime.innerText = "11:00am - 9:00pm";
  scheduleGrid.appendChild(thursdayTime);

  const friday = document.createElement("div");
  friday.innerText = "Friday";
  scheduleGrid.appendChild(friday);
  const fridayTime = document.createElement("div");
  fridayTime.innerText = "11:00am - 9:00pm";
  scheduleGrid.appendChild(fridayTime);

  const saturday = document.createElement("div");
  saturday.innerText = "Saturday";
  scheduleGrid.appendChild(saturday);
  const saturdayTime = document.createElement("div");
  saturdayTime.innerText = "11:00am - 9:00pm";
  scheduleGrid.appendChild(saturdayTime);

  const sunday = document.createElement("div");
  sunday.innerText = "Sunday";
  scheduleGrid.appendChild(sunday);
  const sundayTime = document.createElement("div");
  sundayTime.innerText = "11:00am - 9:00pm";
  scheduleGrid.appendChild(sundayTime);
}

export default schedulePage;
