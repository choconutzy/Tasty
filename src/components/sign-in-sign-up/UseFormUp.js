import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UseFormUp = (props, validate) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  // const signUpHandler = (userdata) => {
  //   // We should of course check email and password
  //   // But it's just a dummy/ demo anyways
  //   sessionStorage.setItem("users", "1");
  // };

  let navigate = useNavigate();

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      const usersExistData = JSON.parse(localStorage.getItem("usersdata")) || [];
      if (!usersExistData) {
        localStorage.setItem("usersdata", "[]");
      }
      const usersdata = [values, ...usersExistData];
      localStorage.setItem("usersdata", [JSON.stringify(usersdata)]);
      navigate("../sign-in", { replace: true });
    }
  }, [errors, isSubmitting, values, navigate]);

  return { handleChange, values, handleSubmit, errors };
};

export default UseFormUp;
