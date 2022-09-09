import { Fragment } from "react";
import { NavLink } from "react-router-dom";

import ageofempiresImage from "../../../assets/age-of-empires.jpg";
import classes from "./Header.module.scss";

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>  
        <div>
          <h1>Age of Empires Wiki</h1>
        </div>
        <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to='/' activeClassName={classes.active}>
            Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/units' activeClassName={classes.active}>
            Units
            </NavLink>
          </li>
        </ul>
      </nav>
      </header>
      <div className={classes["main-image"]}>
        <img src={ageofempiresImage} alt="Age of empires cover" />
      </div>
    </Fragment>
  );
};

export default Header;
