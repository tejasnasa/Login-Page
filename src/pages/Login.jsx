import React from "react";
import LoginCard from "../components/login-cards/LoginCard";
import SocialCard from "../components/login-cards/SocialCard";
import Grid from "@mui/material/Grid";

const Login = () => {
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
            <h1 className="text-5xl font-bold mb-2 mt-12">Welcome Back</h1>
            <h2 className="text-lg mb-20">Start chatting now</h2>
            <LoginCard />
            <div className="flex justify-center flex-col mt-8 flex-nowrap">
              <h2 className="text-md ml-auto mr-auto">OR LOGIN WITH</h2>
              <SocialCard />{" "}
              <span className="text-md mt-16">
                Don't have an account?{" "}
                <a href="/signup" className="font-semibold hover:text-gray-600">
                  Register Here
                </a>
              </span>
            </div>
          </div>
        </Grid>
      </Grid>
    </section>
  );
};

export default Login;
