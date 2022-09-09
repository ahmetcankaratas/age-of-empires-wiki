import { useState } from "react";
import { Checkbox } from "@mui/material";

import classes from "./CostFilter.module.scss";

const CostFilter = ({ resource }) => {
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  console.log(checked);
  return (
    <div className={classes.container}>
      <Checkbox
        checked={checked}
        onChange={handleChange}
        inputProps={{ "aria-label": "primary checkbox" }}
      />
      <span className={classes.label}>{resource}</span>
    </div>
  );
};

export default CostFilter;
