import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="flex space-between mt-auto mb-auto bg-white">
        <div className=" p-2">
          <NavLink to="/home">Home</NavLink>
        </div>
        <div className=" p-2">Contact</div>
      </div>
    </nav>
  );
};

export default Navbar;
