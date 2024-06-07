let body = document.getElementsByTagName("BODY")[0];
let themeBtn = document.getElementById("themeImg");
let navbar = document.getElementById("navbar");
// const monthYearElement = document.getElementById("monthYear");
const monthElement = document.getElementById("month");
const YearElement = document.getElementById("Year");
const datesElement = document.getElementById("dates");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const calendarContainer = document.querySelector(".calendar");
const monthClick = document.querySelector(".month");
const month_list = monthOverlay.querySelector(".months");

const monthsArray = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

monthsArray.forEach((e, index) => {
  let months = document.createElement("div");
  months.innerHTML = `<div>${e}</div`;
  months.onclick = () => {
    monthOverlay.style.display = "none";
    currentDate.setMonth(index);
    updateCalendar();
  };
  month_list.appendChild(months);
});

let currentDate = new Date();

monthClick.addEventListener("click", function () {
  monthOverlay.style.display = "flex";
  console.log("Month clicked!");
});
monthOverlay.addEventListener("click", (event) => {
  if (event.target === monthOverlay) {
    monthOverlay.style.display = "none";
  }
});

const updateCalendar = () => {
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  const firstDay = new Date(currentYear, currentMonth, 1);
  const lastDay = new Date(currentYear, currentMonth + 1, 0);
  const totalDays = lastDay.getDate();
  const firstDayIndex = firstDay.getDay();
  const lastDayIndex = lastDay.getDay();

  const monthString = currentDate.toLocaleString("default", {
    month: "long",
  });
  const YearString = currentDate.toLocaleString("default", {
    year: "numeric",
  });
  monthElement.textContent = monthString;
  YearElement.textContent = YearString;

  let datesHTML = "";

  for (let i = firstDayIndex; i > 0; i--) {
    const prevDate = new Date(currentYear, currentMonth, 0 - i + 1);
    datesHTML += `<div class="date inactive">${prevDate.getDate()}</div>`;
  }
  for (let i = 1; i <= totalDays; i++) {
    const date = new Date(currentYear, currentMonth, i);
    const activeClass =
      date.toDateString() === new Date().toDateString() ? "active" : "";
    datesHTML += `<div class="date ${activeClass}">${i}</div>`;
  }
  for (let i = 1; i <= 6 - lastDayIndex; i++) {
    const nextDate = new Date(currentYear, currentMonth + 1, i);
    datesHTML += `<div class="date inactive">${nextDate.getDate()}</div>`;
  }

  datesElement.innerHTML = datesHTML;
};

prevBtn.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  updateCalendar();
});

nextBtn.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  updateCalendar();
});

upBtn.addEventListener("click", () => {
  currentDate.setFullYear(currentDate.getFullYear() - 1);
  updateCalendar();
});

downBtn.addEventListener("click", () => {
  currentDate.setFullYear(currentDate.getFullYear() + 1);
  updateCalendar();
});
updateCalendar();

themeBtn.addEventListener("click", function () {
  body.classList.toggle("darktheme");
  navbar.classList.toggle("darktheme");
  if (body.classList.contains("darktheme")) {
    themeBtn.src = "assests/sun.png";
  } else {
    themeBtn.src = "assests/moon.png";
    document.body.style.transition = "1s";
  }
});

function click() {
  const overlay = document.getElementById("overlay");
  console.log("Baby");
  overlay.style.display = overlay.style.display == "flex" ? "none" : "flex";
}
const loginButton = document.getElementById("loginButton");
const overlay = document.getElementById("overlay");

loginButton.addEventListener("click", () => {
  overlay.style.display = "flex";
  console.log("Hello");
});

overlay.addEventListener("click", (event) => {
  if (event.target === overlay) {
    overlay.style.display = "none";
  }
});

function click() {
  const overlay1 = document.getElementById("overlay1");
  console.log("Baby");
  overlay1.style.display = overlay1.style.display == "flex" ? "none" : "flex";
}
const Calender = document.getElementById("Calender");
const overlay1 = document.getElementById("overlay1");

Calender.addEventListener("click", () => {
  overlay1.style.display = "flex";
  console.log("Hello");
});

overlay1.addEventListener("click", (event) => {
  if (event.target === overlay1) {
    overlay1.style.display = "none";
  }
});
