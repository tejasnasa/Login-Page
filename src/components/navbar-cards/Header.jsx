import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="h-18 work-sans-1">
      <div className="grad w-11/12 ml-auto mr-auto flex justify-between m-3 p-2 rounded-3xl border-solid border-2 border-[#8cbcec]">
        <NavLink to={"/"}>
          <img src="./images/logo.png" alt="Logo" className="h-14 ml-5" />
        </NavLink>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
