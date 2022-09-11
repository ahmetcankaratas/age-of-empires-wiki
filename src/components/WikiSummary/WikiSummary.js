import classes from "./WikiSummary.module.scss";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const WikiSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Age Of Empires</h2>
      <p>
        The wiki about the Age of Empires series, the real-time strategy games
        developed by Ensemble Studios,
      </p>
      <p>
        You can use different filters and easliy review the unit detail which
        include useful informations.
      </p>
      <Link to={`/units`}>
        <Button className={classes.button} variant="contained" color="error">
          Discover
        </Button>
      </Link>
    </section>
  );
};

export default WikiSummary;
