import { useState } from "react";
import { app, database } from "../../firebaseConfig";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";

const Login = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const auth = getAuth();
  const handleInputs = (event) => {
    let inputs = { [event.target.name]: event.target.value };
    setData({ ...data, ...inputs });
  };
  const handleSubmit = () => {
    createUserWithEmailAndPassword(auth, data.email, data.password, data.name)
      .then((response) => {
        console.log(response.user);
        const user = response.user;
      })
      .catch((err) => {
        alert(err.message);
      });
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
        <button
          className="m-2 p-2 border-solid border-black border-2"
          onClick={handleSubmit}
        >
          Sign In
        </button>
      </div>
    </section>
  );
};

export default Login;
