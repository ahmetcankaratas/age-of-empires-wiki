import { useState } from "react";
import { useDispatch } from "react-redux";
import { Tab, Tabs } from "@mui/material";

import classes from "./AgesFilter.module.scss";

const AgesFilter = () => {
  const [age, setAge] = useState("all");
  const dispatch = useDispatch();

  const setAgeHandler = (event, newAge) => {
    setAge(newAge);
    dispatch({
      type: "AGE_FILTER",
      payload: newAge,
    });
  };

  return (
    <Tabs
      className={classes.tabs}
      value={age}
      onChange={setAgeHandler}
      centered
    >
      <Tab className={classes.tab} value="all" label="All" />
      <Tab className={classes.tab} value="Dark" label="Dark" />
      <Tab className={classes.tab} value="Feudal" label="Feudal" />
      <Tab className={classes.tab} value="Castle" label="Castle" />
      <Tab className={classes.tab} value="Imperial" label="Imperial" />
    </Tabs>
  );
};

export default AgesFilter;
