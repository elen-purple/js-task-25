const form = document.querySelector("#form");
const submitBtn = document.querySelector("#submit-btn");
const backdrop = document.querySelector("#backdrop");
const closeBtn = document.querySelector("#close-btn");
const page = document.querySelector("body");
const user = {};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  user.name = form.querySelector("#form-name").value;
  user.email = form.querySelector("#form-email").value;
  user.message = form.querySelector("#form-message").value;
  form.querySelector("#form-name").value = "";
  form.querySelector("#form-email").value = "";
  form.querySelector("#form-message").value = "";
  backdrop.classList.toggle("is-hidden");
  page.classList.toggle("no-scroll");
});

closeBtn.addEventListener("click", () => {
  backdrop.classList.toggle("is-hidden");
  page.classList.toggle("no-scroll");
});
