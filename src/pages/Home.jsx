import React from "react";
import { Grid } from "@mui/material";

const Home = () => {
  return (
    <section id="landing" className="w-9/12 mr-auto ml-auto h-screen m-10">
      <Grid container spacing={6}>
        <Grid item md={5} xs={12}>
          <div>
            <p className="text-xl mb-5 mt-10">With Tejix AI</p>
            <p className="text-[75px] font-bold leading-[100px] mb-10">
              Talk To The Future
            </p>
            <p className="text-justify">
              Step into a world of intelligent conversations with Tejix chatbot.
              Your virtual companion understands you, learns from you, and
              engages in meaningful dialogues.
            </p>
            <a
              href="/login"
              className="p-6 px-16 mt-10 w-full bg-pink-500 text-white hover:bg-pink-600 rounded-xl text-xl flex items-center justify-center"
            >
              TRY NOW
            </a>
          </div>
        </Grid>
        <Grid item md={7} xs={12}>
          <img
            id="img1"
            src="/images/landing.webp"
            className="rounded-full w-full h-full object-cover p-4"
          />
        </Grid>
      </Grid>
    </section>
  );
};

export default Home;
