import { Link, NavLink } from "react-router";
import "./style.css";
const Navbar = () => {
  return (
    <div className="rounded-2xl bg-secondary-content/50 p-4 font-medium flex justify-center gap-6 mt-2">
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/registration"}>Registration</NavLink>
      <NavLink to={"/applicants"}>Applicants</NavLink>
    </div>
  );
};

export default Navbar;
