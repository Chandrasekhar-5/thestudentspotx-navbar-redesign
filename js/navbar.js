const menuToggle = document.getElementById("menuToggle");
const body = document.body;

menuToggle.addEventListener("click", () => {
  body.classList.toggle("nav-open");
});

const mobileDropdownTriggers = document.querySelectorAll(
  ".mobile-dropdown-trigger"
);

mobileDropdownTriggers.forEach(trigger => {
  trigger.addEventListener("click", () => {
    const parentItem = trigger.closest(".nav-item-m");
    parentItem.classList.toggle("open");
  });
});