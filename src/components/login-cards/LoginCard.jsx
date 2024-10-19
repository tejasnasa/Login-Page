import { signIn } from "../../utils/signinHelpers";
import React, { useState } from "react";
import { validateSignin } from "../../utils/validationSchema";
import { TextField } from "@mui/material";
import { validationStyles } from "../../utils/validationStyles";

const LoginCard = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    let inputs = { [event.target.name]: event.target.value };
    setData({ ...data, ...inputs });
    setError("");
    setErrors({ ...errors, [event.target.name]: "" });
  };

  const handleSubmit = () => {
    const validation = validateSignin(data);
    if (!validation.success) {
      setError(validation.error.errors[0].message);
      const newErrors = {};
      validation.error.errors.forEach((err) => {
        newErrors[err.path[0]] = err.message;
      });
      setErrors(newErrors);
    } else {
      setError("");
      signIn(data.email, data.password);
      console.log("Signin form submitted:", data);
    }
  };

  return (
    <section className=" flex justify-center flex-col">
      <div className="mb-2">
        <TextField
          label="Email / Name"
          type="email"
          name="email"
          onChange={handleChange}
          sx={validationStyles("email", errors)}
          fullWidth
        />
      </div>
      <div>
        <TextField
          label="Password"
          type="password"
          name="password"
          onChange={handleChange}
          sx={validationStyles("password", errors)}
          fullWidth
        />
      </div>

      <div style={{ height: "20px" }}>
        {error && (
          <span
            style={{ color: "red", visibility: error ? "visible" : "hidden" }}
          >
            {error}
          </span>
        )}
      </div>

      <button
        className="mt-8 p-2 border-solid border-black border-2 h-16"
        onClick={handleSubmit}
      >
        SIGN IN
      </button>
    </section>
  );
};

export default LoginCard;
