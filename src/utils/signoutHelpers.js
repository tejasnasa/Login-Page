import { getAuth, signOut } from "firebase/auth";

const auth = getAuth();

export const logout = () => {
  signOut(auth)
    .then(() => {
      console.log("User signed out successfully.");
    })
    .catch((error) => {
      console.error("Error signing out:", error.message);
    });
};
