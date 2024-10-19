import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="h-20 work-sans-1 bg-[#6b8ce9]">
      <div className="container flex justify-between">
        <NavLink to={"/"}>
          <img src="./images/logo.png" alt="Logo" className="h-20 p-1" />
        </NavLink>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
