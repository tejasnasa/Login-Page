import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db } from "../../utils/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { NavLink } from "react-router-dom";
import DropDown from "../DropDown";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        const userDocRef = doc(db, "users", currentUser.uid);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          setUsername(userDoc.data().username);
        }
      } else {
        setUser(null);
        setUsername("");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("User signed out successfully.");
      })
      .catch((error) => {
        console.error("Error signing out: ", error);
      });
  };

  return (
    <div className="flex justify-evenly items-center mr-5">
      {user ? (
        <div className="flex justify-evenly items-center">
          <NavLink to="/chat" className="m-4 ">
            Chat
          </NavLink>
          <DropDown
            label={
              user.username || username || user.displayName || "Anonymous User"
            }
            onSignOut={handleSignOut}
          />
        </div>
      ) : (
        <a href="/login" className="p-3 bg-blue-600 text-white">
          Log In
        </a>
      )}
    </div>
  );
};

export default Navbar;
