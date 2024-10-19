import { TwitterAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function TwitterSignin() {
  const provider = new TwitterAuthProvider();
  const auth = getAuth();
  const navigate = useNavigate();

  const twitterSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        navigate("/chat");
      })
      .catch((error) => {
        console.error("Error signing in with Twitter:", error.message);
      });
  };

  return (
    <button onClick={twitterSignIn}>
      <img
        src="/images/socials/twitter.jpg"
        alt="twitter"
        className="h-10 rounded-full m-2"
      />
    </button>
  );
}

export default TwitterSignin;
