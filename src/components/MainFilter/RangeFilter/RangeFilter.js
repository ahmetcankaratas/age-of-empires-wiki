import React, { useState } from "react";
import { Slider } from "@mui/material";

import classes from "./RangeFilter.module.scss";

export const RangeFilter = () => {
  const [value, setValue] = useState([0, 200]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const labelState = { checked: true };

  console.log(value);

  return (
    <div className={classes.container}>
      <div className={classes.slider}>
        <Slider
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          max={200}
          min={0}
          disabled={false}
        />
      </div>
      <div>
        <span className={classes.value}>
          {labelState.checked ? `${value[0]} / ${value[1]}` : "0 / 200"}
        </span>
      </div>
    </div>
  );
};

export default RangeFilter;
