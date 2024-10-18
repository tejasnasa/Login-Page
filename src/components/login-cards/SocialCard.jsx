import React from "react";
import GitHubSignin from "../socials-signin/GithubSignin";
import GoogleSignin from "../socials-signin/GoogleSignin";
import TwitterSignin from "../socials-signin/TwitterSignin";
import YahooSignin from "../socials-signin/YahooSignin";

const SocialCard = () => {
  return (
    <div>
      <GitHubSignin />
      <GoogleSignin />
      <TwitterSignin />
      <YahooSignin />
    </div>
  );
};

export default SocialCard;
