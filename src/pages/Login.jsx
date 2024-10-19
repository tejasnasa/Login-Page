import React from "react";
import LoginCard from "../components/login-cards/LoginCard";
import SocialCard from "../components/login-cards/SocialCard";
const Login = () => {
  return (
    <section className="flex justify-evenly align-middle h-screen w-11/12 mr-auto ml-auto">
      <img
        src="/images/login.jpg"
        style={{ display: "inline-block" }}
        className="h-[42rem]"
      />

      <div className="flex justify-center" style={{ width: "600px" }}>
        <div className=" bg-white h-[42rem] w-5/6">
          <h1 className="text-5xl font-bold mb-2 mt-12">Welcome Back</h1>
          <h2 className="text-lg mb-16">Start chatting now</h2>
          <LoginCard />
          <div className="flex justify-center flex-col mt-8 mb-16">
            <h2 className="text-md ml-auto mr-auto">OR LOGIN WITH</h2>
            <SocialCard />
          </div>
          <span className="text-md">
            Don't have an account? <a href="/signup" className="font-semibold hover:text-gray-600">Register Here</a>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Login;
