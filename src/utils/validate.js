export const validateEmail = (email, password) => {
  let error = "";
  const emailValid =
    /^[\w-]+(\.[\w-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,})$/.test(
      email
    );
  if (!emailValid) error = "Please enter a valid email address";
  return error;
};
export const validatePassword = (password) => {
  let error = "";
  const passwordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  if (!passwordValid)
    error ="Your password must contain uppercase, lowercase , specail characters";
    return error;
};
