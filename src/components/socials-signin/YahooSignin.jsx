import { getAuth, OAuthProvider, signInWithPopup } from "firebase/auth";

function YahooSignin() {
  const provider = new OAuthProvider("yahoo.com");
  const auth = getAuth();

  const yahooSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log("User signed in with Yahoo:", user);
      })
      .catch((error) => {
        console.error("Error signing in with Yahoo:", error.message);
      });
  };

  return (
    <button onClick={yahooSignIn} className="yahoo-signin-button">
      Log In with Yahoo
    </button>
  );
}

export default YahooSignin;
