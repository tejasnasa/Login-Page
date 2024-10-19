import React from "react";
import SignupCard from "../components/login-cards/SignupCard";

const Signup = () => {
  return (
    <section className="flex justify-between align-middle h-screen w-11/12 mr-auto ml-auto">
      <img src="/images/login.jpg" alt="" style={{ display: "inline-block" }} />
      <div className="flex justify-center" style={{ width: "800px" }}>
        <div className="w-5/6 bg-white" style={{ height: "600px" }}>
          <h1 className="text-5xl font-bold mb-2 mt-6">Create Account</h1>
          <h2 className="text-lg mb-16">Start chatting now</h2>
          <SignupCard />
          <span className="text-md">
            Already have an account? <a href="/login">Login Here</a>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Signup;
