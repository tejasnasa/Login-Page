import { TwitterAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

function TwitterSignin() {
  const provider = new TwitterAuthProvider();
  const auth = getAuth();

  const twitterSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log("User signed in with Twitter:", user);
      })
      .catch((error) => {
        console.error("Error signing in with Twitter:", error.message);
      });
  };

  return (
    <button onClick={twitterSignIn}>
      <img src="/images/socials/twitter.jpg" alt="twitter" className="h-10 rounded-full m-2" />
    </button>
  );
}

export default TwitterSignin;
