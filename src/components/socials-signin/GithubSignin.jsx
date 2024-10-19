import { getAuth, GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function GitHubSignin() {
  const auth = getAuth();
  const provider = new GithubAuthProvider();
  const navigate = useNavigate();

  const githubSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        navigate("/chat");
      })
      .catch((error) => {
        console.error("Error signing in with GitHub:", error.message);
      });
  };

  return (
    <button onClick={githubSignIn}>
      <img
        src="/images/socials/github.png"
        alt="github"
        className="h-10 rounded-full m-2"
      />
    </button>
  );
}

export default GitHubSignin;
