import { useState } from "react";
import { signUp } from "../../utils/signupHelpers";
import { validateSignup } from "../../utils/validationSchema";
import { TextField } from "@mui/material";
import { validationStyles } from "../../utils/validationStyles";

const SignupCard = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    phoneNum: "",
    address: "",
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
    const validation = validateSignup(data);

    if (!validation.success) {
      setError(validation.error.errors[0].message);
      const newErrors = {};
      validation.error.errors.forEach((err) => {
        newErrors[err.path[0]] = err.message;
      });
      setErrors(newErrors);
    } else {
      setError("");
      signUp(data.name, data.email, data.password, data.phoneNum, data.address);
      console.log("Signup form submitted:", data);
    }
  };

  return (
    <section>
      <div className="mb-2">
        <TextField
          label="Name"
          type="text"
          name="name"
          onChange={handleChange}
          sx={validationStyles("name", errors)}
        />
      </div>
      <div className="mb-2">
        <TextField
          label="Email"
          type="email"
          name="email"
          onChange={handleChange}
          sx={validationStyles("email", errors)}
        />
      </div>
      <div className="mb-2">
        <TextField
          label="Password"
          type="password"
          name="password"
          onChange={handleChange}
          sx={validationStyles("password", errors)}
        />
      </div>
      <div className="mb-2">
        <TextField
          label="Phone Number"
          type="text"
          name="phoneNum"
          onChange={handleChange}
          sx={validationStyles("phoneNum", errors)}
        />
      </div>
      <div className="mb-2">
        <TextField
          label="Address"
          type="text"
          name="address"
          onChange={handleChange}
          sx={validationStyles("address", errors)}
        />
      </div>

      {error && <span style={{ color: "red" }}>{error}</span>}
      <button
        className="m-2 p-2 border-solid border-black border-2"
        onClick={handleSubmit}
      >
        Sign In
      </button>
      <a href="/login">Login Instead</a>
    </section>
  );
};

export default SignupCard;
