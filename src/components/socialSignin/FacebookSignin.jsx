import { FacebookAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

function FacebookSignin() {
  const provider = new FacebookAuthProvider();
  const auth = getAuth();

  const facebookSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log("User signed in with Facebook:", user);
      })
      .catch((error) => {
        console.error("Error signing in with Facebook:", error.message);
      });
  };

  return (
    <button onClick={facebookSignIn} className="facebook-signin-button">
      Log In with Facebook
    </button>
  );
}

export default FacebookSignin;
