import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebaseConfig";

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
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
          <h1>{user.displayName || user.email}</h1>

          <button onClick={handleSignOut} className="p-3 bg-blue-600 text-white">Sign Out</button>
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
