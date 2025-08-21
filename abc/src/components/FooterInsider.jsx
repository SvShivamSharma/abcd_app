import { NavLink } from "react-router-dom";
export default function FooterInsider({ msg, to }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `border border-white text-center py-3 w-80 h-80 d-block ${
          isActive ? "bg-white text-danger" : "bg-danger text-white"
        }`
      }
      style={{ cursor: "pointer", textDecoration: "none" }}
    >
      {msg}
    </NavLink>
  );
}
