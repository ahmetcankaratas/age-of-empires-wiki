import React from "react";
import { useState } from "react";
import { Tab, Tabs } from "@mui/material";
import { StyledEngineProvider } from "@mui/material/styles";

import classes from "./MainBar.module.scss";

const MainBar = () => {
  const [age, setAge] = useState("all");

  const setAgeHandler = (event, newAge) => {
    setAge(newAge);
  };

  console.log(age);

  return (
    <section className={classes.bar}>
      <StyledEngineProvider injectFirst>
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
      </StyledEngineProvider>
    </section>
  );
};

export default MainBar;
