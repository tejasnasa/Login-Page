import { getFirestore, doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

export async function signUp(name, email, password, phoneNum, address, navigate) {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      var user = userCredential.user;
      saveAdditionalUserData(
        user.uid,
        name,
        email,
        password,
        phoneNum,
        address
      );
      navigate("/chat");
    })
    .catch((error) => {
      console.error("Error: ", error.message);
    });
}

export function saveAdditionalUserData(
  uid, 
  username,
  email,
  password,
  phoneNum,
  address
) {
  const db = getFirestore();

  setDoc(doc(db, "users", uid), {
    username: username,
    email: email,
    password: password,
    phoneNum: phoneNum,
    address: address,
  })
    .then(() => {
      console.log("User data saved successfully!");
    })
    .catch((error) => {
      console.error("Error saving user data: ", error);
    });
}
