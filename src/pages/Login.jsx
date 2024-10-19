import React from "react";
import LoginCard from "../components/login-cards/LoginCard";
import SocialCard from "../components/login-cards/SocialCard";
const Login = () => {
  return (
    <section className="flex justify-between align-middle h-screen w-11/12 mr-auto ml-auto">
      <img src="/images/login.jpg" alt="" style={{display: "inline-block"}}/>
      <div className="flex justify-center" style={{ width: "800px" }}>
        <div className="w-5/6 bg-white" style={{ height: "600px" }}>
          <h1 className="text-5xl font-bold mb-2 mt-6">Welcome Back</h1>
          <h2 className="text-lg mb-16">Start chatting now</h2>
          <LoginCard />
          <div className="flex justify-center flex-col mt-8 mb-16">
            <h2 className="text-md ml-auto mr-auto">OR LOGIN WITH</h2>
            <SocialCard />
          </div>
          <span className="text-md">
            Don't have an account? <a href="/signup">Register Here</a>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Login;
