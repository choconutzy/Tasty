export default function ValidateInfo(values) {
  let errors = {};

  const usersExistData = JSON.parse(localStorage.getItem("usersdata")) || [];
  const isUsernameExist = usersExistData.find((e) => e.username === values.username);

  if ("username" in values) {
    //username

    if (!values.username.trim()) {
      errors.username = "username Required";
    } else if (!isUsernameExist) {
      errors.username = "this username not register yet";
    }
  }

  // only when values have 'email' as key (when sign up)
  if ("email" in values) {
    //Email
    if (!values.email) {
      errors.email = "Email Required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email address is invalid";
    }
  }

  //Password
  if ("password" in values && !values.password) {
    errors.password = "Password Required";
  } else if (values.password.length < 8) {
    errors.password = "Password needs to be 8 characters or more";
  } else if (isUsernameExist && isUsernameExist.password !== values.password) {
    errors.password = "Invalid Password";
  }

  // only when values have 'password2' as key (when sign up)
  if ("password2" in values) {
    // Confirm Passsword
    if ("password2" in values && !values.password2) {
      errors.password2 = "Password is required";
    } else if (values.password2 !== values.password) {
      errors.password2 = "Passwords do not match";
    }
  }

  return errors;
}
