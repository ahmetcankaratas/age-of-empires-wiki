import { Fragment } from "react";

import ageofempiresImage from "../../../assets/age-of-empires.jpg";
import classes from "./Header.module.scss";

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Age of Empires Wiki</h1>
      </header>
      <div className={classes["main-image"]}>
        <img src={ageofempiresImage} alt="Age of empires cover" />
      </div>
    </Fragment>
  );
};

export default Header;
