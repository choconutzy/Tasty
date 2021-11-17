import { useState, useEffect } from "react";

const UseFormIn = (props, validate, addAuthUser) => {
  const [values, setValues] = useState({
    username: "",
    password: "",
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

  const handleLogin = props.onLogin;

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      handleLogin(values);
    }
  }, [errors, isSubmitting, values, handleLogin, addAuthUser]);

  return { handleChange, values, handleSubmit, errors };
};

export default UseFormIn;
