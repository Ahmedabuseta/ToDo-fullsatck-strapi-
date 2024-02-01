import { NavLink } from "react-router-dom";
import DarkModeBtn from "./ui/darkmodebtn";

const Navbar = () => {
  return (
    <nav className="max-w-lg z-10 fixed top-7 inset-x-0  w-full  mx-auto bg-indigo-600 px-3 py-5 rounded-md">
      <ul className="flex items-center  justify-between">
        <li className="text-white duration-200 font-semibold text-lg">
          <NavLink to="/">Home</NavLink>
        </li>
        <p className="flex items-center space-x-3">
          <li className="text-white duration-200 font-semibold text-lg">
            <NavLink to="/register">Register</NavLink>
          </li>
          <li className="text-white duration-200 font-semibold text-lg">
            <NavLink to="/login">Login</NavLink>
          </li>
          <DarkModeBtn />
        </p>
      </ul>
    </nav>
  );
};

export default Navbar;
