import React from "react";
import LoginCard from "../components/login-cards/LoginCard";
import SocialCard from "../components/login-cards/SocialCard"
const Login = () => {
  return (
    <section className="flex justify-around align-middle ">
      <div className="w-2/6">
        <h1 className="text-5xl font-bold mb-2 mt-6">Welcome Back</h1>
        <h2 className="text-lg mb-16">Sign in to continue your progress</h2>
        <LoginCard />
        <h2 className="text-md">OR LOGIN WITH</h2>
        <SocialCard />
        <span className="text-md">Don't have an account? <a href="/signup">Register Here</a></span>
      </div>
    </section>
  );
};

export default Login;
