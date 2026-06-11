// Highlight the nav link for the page currently being viewed
const currentPage = location.pathname.split("/").pop() || "index.html";

document.querySelectorAll("nav a").forEach((link) => {
  const target = link.getAttribute("href").split("/").pop();
  if (target === currentPage) {
    link.classList.add("active");
  }
});

console.log("Spaceman Magazine Loaded");
