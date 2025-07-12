// Auto-update year in footer
document.addEventListener("DOMContentLoaded", function () {
  const yearSpan = document.getElementById("currentYear");
  yearSpan.textContent = new Date().getFullYear();

  // You can add more interactive features here
  console.log("LinkHub initialized");
});
