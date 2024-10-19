import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

export function signIn(identifier, password, navigate) {
  const auth = getAuth();
  const db = getFirestore();

  // Regular expression to check if the identifier is an email
  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(identifier);

  if (isEmail) {
    // If it's an email, sign in directly
    signInWithEmailAndPassword(auth, identifier, password)
      .then((userCredential) => {
        navigate("/chat");
      })
      .catch((error) => {
        alert(error.message);
      });
  } else {
    // If it's a username, query Firestore to find the email
    const usersCollection = collection(db, "users");
    const usernameQuery = query(
      usersCollection,
      where("username", "==", identifier)
    );

    getDocs(usernameQuery)
      .then((querySnapshot) => {
        if (!querySnapshot.empty) {
          // If a user with the provided username exists
          const userDoc = querySnapshot.docs[0];
          const userEmail = userDoc.data().email; // Assuming user data has an email field

          // Now sign in with the retrieved email
          return signInWithEmailAndPassword(auth, userEmail, password);
        } else {
          alert("Username does not exist.");
        }
      })
      .then((userCredential) => {
        if (userCredential) {
          navigate("/chat");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  }
}
