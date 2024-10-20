import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db } from "../../utils/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { NavLink, useNavigate } from "react-router-dom";
import DropDown from "./DropDown";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

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
        navigate("/login");
      })
      .catch((error) => {
        console.error("Error signing out: ", error);
      });
  };

  return (
    <div className="flex justify-evenly items-center mr-5">
      {user ? (
        <div className="flex justify-evenly items-center">
          <NavLink to="/chat" className="m-4 mr-7">
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
        <a href="/login" className="p-3 pl-5 pr-5 bg-pink-500 text-white rounded hover:bg-pink-600">
          Log In
        </a>
      )}
    </div>
  );
};

export default Navbar;
