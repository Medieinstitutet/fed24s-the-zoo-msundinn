import { NavLink } from "react-router";

export const Navigation = () => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/">Hem</NavLink>
      </li>
      <li>
        <NavLink to="/animals">Djuren</NavLink>
      </li>
    </ul>
  );
};
