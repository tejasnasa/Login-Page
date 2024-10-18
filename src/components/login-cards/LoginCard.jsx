import { signIn } from "../../utils/signinHelpers";
import React, { useState } from "react";
import SocialCard from "./SocialCard";
import { validateSignin } from "../../utils/validationSchema";

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
    <section className="flex justify-center items-center h-screen">
      <div className="flex flex-wrap flex-col">
        <input
          className= {`m-2 p-2 border-solid border-black border-2 ${errors.email ? 'error' : ''}`}
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
        />
        <input
          className={`m-2 p-2 border-solid border-black border-2 ${errors.password ? 'error' : ''}`}
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
        />
        {error && <span style={{ color: "red" }}>{error}</span>}
        <button
          className="m-2 p-2 border-solid border-black border-2"
          onClick={handleSubmit}
        >
          Sign In
        </button>
        <a href="/signup">Create account</a>
        <SocialCard />
      </div>
    </section>
  );
};

export default LoginCard;
