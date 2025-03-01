export const makeUser = (form, user) => {
  user.name = form.querySelector("#form-name").value;
  user.email = form.querySelector("#form-email").value;
  user.message = form.querySelector("#form-message").value;
};

