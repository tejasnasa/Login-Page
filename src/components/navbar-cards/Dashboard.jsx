import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db } from "../../utils/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

const Dash = () => {
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
    <div>
      {user ? (
        <div>
          <h1>
            {user.username || username || user.displayName || "Anonymous User"}
          </h1>
          <button
            onClick={handleSignOut}
            className="p-3 bg-blue-600 text-white"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <a href="/login" className="p-3 bg-blue-600 text-white">
          Log In
        </a>
      )}
    </div>
  );
};

export default Dashboard; 
