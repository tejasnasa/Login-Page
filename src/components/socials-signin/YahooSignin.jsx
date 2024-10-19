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
    <button onClick={yahooSignIn}>
      <img src="/images/socials/yahoo.jpg" alt="yahoo" className="h-10 rounded-full m-2" />
    </button>
  );
}

export default YahooSignin;
