import React from "react";
import SignupCard from "../components/login-cards/SignupCard";
import { Grid } from "@mui/material";

const Signup = () => {
  return (
    <section className="flex justify-evenly align-middle w-10/12 mr-auto ml-auto flex-wrap">
      <Grid
        container
        columns={14}
        spacing={3}
        columnSpacing={{ md: 8 }}
        alignItems="center"
      >
        <Grid item md={8} xs={14}>
          <img
            id="loginimg"
            src="/images/login.jpg"
            className="w-full h-auto md:h-[42rem]"
            alt="Login"
          />
        </Grid>

        <Grid item md={6} xs={14}>
          <div className="flex justify-center flex-col w-11/12 ml-auto mr-auto">
          <h1 className="text-5xl font-bold mb-2 mt-6">Create Account</h1>
          <h2 className="text-lg mb-16">Start chatting now</h2>
          <SignupCard />
          <span className="text-md">
            Already have an account? <a href="/login" className="font-semibold hover:text-gray-600">Login Here</a>
          </span>
          </div>
        </Grid>
      </Grid>
    </section>
  );
};

export default Signup;
