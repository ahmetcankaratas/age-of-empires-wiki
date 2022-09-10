import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Checkbox } from "@mui/material";

import classes from "./CostFilter.module.scss";

const CostFilter = ({ resource }) => {
  const [checked, setChecked] = useState(true);

  const dispatch = useDispatch();
  const resourceState = useSelector((state) => state[resource]);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    dispatch({
      type: "COST",
      payload: {
        resourceName: resource,
        checked: !checked,
      },
    });
  };

  return (
    <div className={classes.container}>
      <Checkbox
        checked={checked}
        onChange={handleChange}
        inputProps={{ "aria-label": "primary checkbox" }}
        value={resourceState.checked}
      />
      <span className={classes.label}>{resource}</span>
    </div>
  );
};

export default CostFilter;
