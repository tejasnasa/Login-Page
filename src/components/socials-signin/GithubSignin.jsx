import { getAuth, GithubAuthProvider, signInWithPopup } from "firebase/auth";

function GitHubSignin() {
  const auth = getAuth();
  const provider = new GithubAuthProvider();
  const githubSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log("User signed in with GitHub:", user);
      })
      .catch((error) => {
        console.error("Error signing in with GitHub:", error.message);
      });
  };

  return (
    <button onClick={githubSignIn}>
      Log In with GitHub
    </button>
  );
}

export default GitHubSignin;
