import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function GoogleSignin() {
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const googleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        navigate("/chat");
      })
      .catch((error) => {
        console.error("Error signing in with Google:", error.message);
      });
  };

  return (
    <button onClick={googleSignIn}>
      <img
        src="/images/socials/google.webp"
        alt="google"
        className="h-10 rounded-full m-2"
      />
    </button>
  );
}

export default GoogleSignin;
