import { useState } from "react";
import { app, database } from "../utils/firebaseConfig";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { signIn } from "../utils/signinHelpers";

const LoginCard = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handleInputs = (event) => {
    let inputs = { [event.target.name]: event.target.value };
    setData({ ...data, ...inputs });
  };
  const handleSubmit = () => {
    signIn(data.email, data.password);
  };

  return (
    <section className="flex justify-center items-center h-screen">
      <div className="flex flex-wrap flex-col">
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
        <button
          className="m-2 p-2 border-solid border-black border-2"
          onClick={handleSubmit}
        >
          Sign In
        </button>
        <a href="/signup">Create account</a>
      </div>
    </section>
  );
};

export default LoginCard;
