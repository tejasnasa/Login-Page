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

  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(identifier);

  if (isEmail) {
    signInWithEmailAndPassword(auth, identifier, password)
      .then((userCredential) => {
        navigate("/chat");
      })
      .catch((error) => {
        alert(error.message);
      });
  } else {
    const usersCollection = collection(db, "users");
    const usernameQuery = query(
      usersCollection,
      where("username", "==", identifier)
    );

    getDocs(usernameQuery)
      .then((querySnapshot) => {
        if (!querySnapshot.empty) {
          const userDoc = querySnapshot.docs[0];
          const userEmail = userDoc.data().email;

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
