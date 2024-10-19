import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

function GoogleSignin() {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const googleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const name = result.user.displayName;
        console.log(result.user.displayName);
      })
      .catch((error) => {
        console.error("Error signing in with Google:", error.message);
      });
  };

  return (
    <button onClick={googleSignIn}>
      <img src="/images/socials/google.webp" alt="google" className="h-10 rounded-full m-2" />
    </button>
  );
}

export default GoogleSignin;
