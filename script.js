document.querySelectorAll(".navigation-button").forEach((item) => {
  item.addEventListener("click", () => {
    item.parentElement.parentElement.classList.toggle("change");
  });
});
