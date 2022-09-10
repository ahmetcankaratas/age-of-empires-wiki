import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Slider } from "@mui/material";

import classes from "./RangeFilter.module.scss";

export const RangeFilter = ({ resource }) => {
  const [value, setValue] = useState([0, 200]);
  const dispatch = useDispatch();
  const resourceState = useSelector((state) => state[resource]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    dispatch({
      type: "COST_FILTER",
      payload: { resourceName: resource, value: newValue },
    });
  };

  return (
    <div className={classes.container}>
      <div className={classes.slider}>
        <Slider
          value={resourceState.value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          max={200}
          min={0}
          disabled={!resourceState.checked}
        />
      </div>
      <div>
        <span className={classes.value}>
          {resourceState.checked ? `${value[0]} / ${value[1]}` : "0 / 200"}
        </span>
      </div>
    </div>
  );
};

export default RangeFilter;
