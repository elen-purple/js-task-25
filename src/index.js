const form = document.querySelector("#form");
const backdrop = document.querySelector("#backdrop");
const closeBtn = document.querySelector("#close-btn");
const page = document.querySelector("body");
import { makeUser } from "./make-user.js";
const user = {};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  makeUser(form, user);
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
