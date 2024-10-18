import { NavLink } from "react-router-dom";
import Dashboard from "./Dashboard";

const Navbar = () => {
  return (
    <nav>
      <div className="flex space-between h-20 items-center">
        <NavLink to="/chat" className="p-4 pe-6">
          Chat
        </NavLink>
        <Dashboard />
      </div>
    </nav>
  );
};

export default Navbar;
