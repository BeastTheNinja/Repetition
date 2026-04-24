import { NavLink } from "react-router";
import navIcon from "../../assets/NavIcon.svg";
import style from "./Navbar.module.scss";

export const NavBar = () => {
  return (
    <nav className={style.navStyling}>
      <img src={navIcon} alt="Navigation Icon" />
      <div>
        <NavLink
          to="/overview"
          className={({ isActive }) =>
            isActive ? style.activeLink : style.link
          }>
          Oversigt
        </NavLink>

        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? style.activeLink : style.link
          }>
          Lige Nu
        </NavLink>

        <NavLink
          to="/history"
          className={({ isActive }) =>
            isActive ? style.activeLink : style.link
          }>
          History
        </NavLink>
      </div>
    </nav>
  );
};
