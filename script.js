ScrollReveal().reveal(".card", {
  distance: "50px",
  duration: 1000,
  origin: "bottom",
  interval: 150,
});

ScrollReveal().reveal(".impact-card", {
  distance: "50px",
  duration: 1000,
  origin: "bottom",
  interval: 150,
});

window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
});
