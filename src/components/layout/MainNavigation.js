import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Genshin Stuff?</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/weapons" activeClassName={classes.active}>
              Weapons
            </NavLink>
          </li>
          <li>
            <NavLink to="/characters" activeClassName={classes.active}>
              Characters
            </NavLink>
          </li>
          <li>
            <NavLink to="/home" activeClassName={classes.active}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/update" activeClassName={classes.active}>
              Update
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;

