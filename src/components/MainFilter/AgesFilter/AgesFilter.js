import React from "react";
import { useState } from "react";
import { Tab, Tabs } from "@mui/material";

import classes from "./AgesFilter.module.scss";

const AgesFilter = () => {
  const [age, setAge] = useState("all");

  const setAgeHandler = (event, newAge) => {
    setAge(newAge);
  };

  console.log(age);

  return (
    <Tabs
      className={classes.tabs}
      value={age}
      onChange={setAgeHandler}
      centered
    >
      <Tab className={classes.tab} value="all" label="All" />
      <Tab className={classes.tab} value="dark" label="Dark" />
      <Tab className={classes.tab} value="feudal" label="Feudal" />
      <Tab className={classes.tab} value="castle" label="Castle" />
      <Tab className={classes.tab} value="imperial" label="Imperial" />
    </Tabs>
  );
};

export default AgesFilter;
