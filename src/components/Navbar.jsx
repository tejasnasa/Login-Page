import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="flex space-between h-20 items-center">
        <NavLink to="/chat" className="p-4 pe-6">
          Chat
        </NavLink>
        <NavLink to="/login" className="p-4 pe-6">
          Login
        </NavLink>
        <div id="username-display" className="p-4 pe-6"></div>
        <div>
          <button id="logout-btn" className="p-3 px-5 bg-blue-600 text-white">
            Log Out
          </button>

          <button id="login-btn" className="p-3 px-5 bg-blue-600 text-white">
            Log In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
