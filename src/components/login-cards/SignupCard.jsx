import { useState } from "react";
import { signUp } from "../../utils/signupHelpers";
import { validateSignup } from "../../utils/validationSchema";

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
    <section className="flex justify-center items-center h-screen">
      <div className="flex flex-wrap flex-col">
        <input
          className={`m-2 p-2 border-solid border-black border-2 ${errors.name ? 'error' : ''}`}
          type="text"
          placeholder="Name"
          name="name"
          onChange={handleChange}
        />
        <input
          className={`m-2 p-2 border-solid border-black border-2 ${errors.email ? 'error' : ''}`}
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
        <input
          className={`m-2 p-2 border-solid border-black border-2 ${errors.phoneNum ? 'error' : ''}`}
          type="text"
          placeholder="Mobile Number"
          name="phoneNum"
          onChange={handleChange}
        />
        <textarea
          className={`m-2 p-2 border-solid border-black border-2 ${errors.address ? 'error' : ''}`}
          type="text"
          placeholder="Address"
          name="address"
          onChange={handleChange}
        />
        {error && <span style={{ color: "red" }}>{error}</span>}
        <button
          className="m-2 p-2 border-solid border-black border-2"
          onClick={handleSubmit}
        >
          Sign In
        </button>
        <a href="/login">Login Instead</a>
      </div>
    </section>
  );
};

export default SignupCard;
