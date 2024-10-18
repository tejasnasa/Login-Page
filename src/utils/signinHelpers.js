import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";

export function signIn(email, password) {
  const auth = getAuth();
  const db = getFirestore();

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const uid = userCredential.user.uid;

      const userDoc = doc(db, "users", uid);
      return getDoc(userDoc);
    })
    .then((docSnap) => {
      if (docSnap.exists()) {
        const userData = docSnap.data();
        console.log("User data:", userData);
        const name = userData.username;

        const usernameDisplay = document.getElementById("username-display");
        usernameDisplay.textContent = `Welcome, ${name}!`;
      } else {
        alert("User does not exist");
      }
    })
    .catch((error) => {
      alert(error.message);
    });
}
