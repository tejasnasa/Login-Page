import { app, database } from "../utils/firebaseConfig";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { signIn } from "../utils/signinHelpers";
import React, { useEffect, useState } from "react"; // Import Firebase config
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import GoogleSignin from "./socialSignin/GoogleSignin";
import GitHubSignin from "./socialSignin/GithubSignin";
import TwitterSignin from "./socialSignin/TwitterSignin";
import YahooSignin from "./socialSignin/YahooSignin";

const LoginCard = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
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
        <GoogleSignin />
        <GitHubSignin />
        <TwitterSignin />
        <YahooSignin />
      </div>
    </section>
  );
};

export default LoginCard;
