let homeButton = document.querySelector("#home");
let aboutButton = document.querySelector("#info");
let assignmentButton = document.querySelector("#assignments");
let homeButtonText = document.querySelector("#homeText");
let aboutButtonText = document.querySelector("#aboutmeText");
let assignmentButtonText = document.querySelector("#assignmentsText");

homeButton.addEventListener("click", () => {
  window.location.href = "index.html";
});

aboutButton.addEventListener("click", () => {
  window.location.href = "about-me.html";
});

assignmentButton.addEventListener("click", () => {
  window.location.href = "assignments.html";
});

homeButton.addEventListener("mouseover", () => {
  homeButtonText.classList.remove("hide");
});

homeButton.addEventListener("mouseout", () => {
  homeButtonText.classList.add("hide");
});

aboutButton.addEventListener("mouseover", () => {
  aboutButtonText.classList.remove("hide");
});

aboutButton.addEventListener("mouseout", () => {
  aboutButtonText.classList.add("hide");
});

assignmentButton.addEventListener("mouseover", () => {
  assignmentButtonText.classList.remove("hide");
});

assignmentButton.addEventListener("mouseout", () => {
  assignmentButtonText.classList.add("hide");
});

if (
  window.location.href.includes("index.html") ||
  window.location.pathname === "/"
) {
  homeButton.classList.add("hide");
} else if (window.location.href.includes("about-me.html")) {
  aboutButton.classList.add("hide");
} else if (window.location.href.includes("assignments.html")) {
  assignmentButton.classList.add("hide");
}
