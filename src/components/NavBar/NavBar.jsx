import { Link } from "react-router";
import navIcon from "../../assets/NavIcon.svg";
import style from "./Navbar.module.scss";

export const NavBar = () => {
  return (
    <nav className={style.navStyling}>
      <img src={navIcon} alt="Navigation Icon" />
      <div>
        <Link to="/overview"> Oversigt </Link>
        <Link to="/"> Lige Nu </Link>
        <Link to="/history"> History </Link>
      </div>
    </nav>
  );
};
