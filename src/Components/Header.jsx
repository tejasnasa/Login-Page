import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="h-20 flex bg-gray-500 work-sans-1 justify-center">
      <div className="w-5/6 flex justify-between">
        <NavLink to={"/"}>
          <img src="./images/logo.png" alt="Logo" className="h-20 p-1" />
        </NavLink>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
