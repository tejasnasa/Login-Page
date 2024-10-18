import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

function GoogleSignin() {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const googleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log("User signed in:", user);
      })
      .catch((error) => {
        console.error("Error signing in with Google:", error.message);
      });
  };

  return <button onClick={googleSignIn}>Log In with Google</button>;
}

export default GoogleSignin;
