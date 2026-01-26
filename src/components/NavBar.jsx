import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between py-4 bg-indigo-700 px-14">
      <div>
        <NavLink to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="logo"
            className="object-contain"
            width="40"
            height="40"
          />
          <span className="text-2xl font-medium text-white">React Jobs</span>
        </NavLink>
      </div>

      <ul className="flex items-center text-lg text-white gap-9">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              ` ${isActive ? "navBar-item  bg-zinc-800 " : "navBar-item"}`
            }
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/jobs"
            className={({ isActive }) =>
              ` ${isActive ? "navBar-item  bg-zinc-800 " : "navBar-item"}`
            }
          >
            Jobs
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/add-jobs"
            className={({ isActive }) =>
              ` ${isActive ? "navBar-item  bg-zinc-800 " : "navBar-item"}`
            }
          >
            Add Jobs
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
