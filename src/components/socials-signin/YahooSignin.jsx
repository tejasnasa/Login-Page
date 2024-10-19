import { getAuth, OAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function YahooSignin() {
  const provider = new OAuthProvider("yahoo.com");
  const auth = getAuth();
  const navigate = useNavigate();

  const yahooSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        navigate("/chat");
      })
      .catch((error) => {
        console.error("Error signing in with Yahoo:", error.message);
      });
  };

  return (
    <button onClick={yahooSignIn}>
      <img src="/images/socials/yahoo.jpg" alt="yahoo" className="h-10 rounded-full m-2" />
    </button>
  );
}

export default YahooSignin;
