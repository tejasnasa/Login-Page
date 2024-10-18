import { useState } from "react";
import { signUp } from "../utils/signupHelpers";

const SignupCard = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    phoneNum: "",
    address: "",
  });
  const handleInputs = (event) => {
    let inputs = { [event.target.name]: event.target.value };
    setData({ ...data, ...inputs });
  };
  const handleSubmit = () => {
    signUp(data.name, data.email, data.password, data.phoneNum, data.address);
  };

  return (
    <section className="flex justify-center items-center h-screen">
      <div className="flex flex-wrap flex-col">
        <input
          className="m-2 p-2 border-solid border-black border-2"
          type="text"
          placeholder="Name"
          name="name"
          onChange={(event) => handleInputs(event)}
        />
        <input
          className="m-2 p-2 border-solid border-black border-2"
          type="email"
          placeholder="Email"
          name="email"
          onChange={(event) => handleInputs(event)}
        />
        <input
          className="m-2 p-2 border-solid border-black border-2"
          type="password"
          placeholder="Password"
          name="password"
          onChange={(event) => handleInputs(event)}
        />
        <input
          className="m-2 p-2 border-solid border-black border-2"
          type="text"
          placeholder="Mobile Number"
          name="phoneNum"
          onChange={(event) => handleInputs(event)}
        />
        <textarea
          className="m-2 p-2 border-solid border-black border-2"
          type="text"
          placeholder="Address"
          name="address"
          onChange={(event) => handleInputs(event)}
        />
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
