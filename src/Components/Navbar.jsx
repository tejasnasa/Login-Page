import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="flex space-between h-20 items-center">
        <NavLink to="/chat" className="p-4 pe-6">
          Chat
        </NavLink>
        <div>
          <button
            className="p-3 px-5 bg-blue-600 text-white"
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Log Out
          </button>

          <button
            className="p-3 px-5 bg-blue-600 text-white"
            onClick={() => loginWithRedirect()}
          >
            Log In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
