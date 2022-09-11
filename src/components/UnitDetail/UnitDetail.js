import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import uuid from "react-uuid";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

import classes from "./UnitDetail.module.scss";

const UnitDetail = () => {
  const { unitId } = useParams();

  const units = useSelector((state) => state.units);

  const data = units.filter((unit) => unit.id === parseInt(unitId))[0];

  // Structured data presentation required on assignment
  const details = {
    ID: data.id,
    Name: data.name,
    Description: data.description,
    "Min. Required Age": data.age,
    "Wood Cost": data.cost.Wood,
    "Food Cost": data.cost.Food,
    "Gold Cost": data.cost.Gold,
    "Build Time": data.build_time,
    "Reload Time": data.reload_time,
    "Hit Points": data.hit_points,
    Attack: data.attack,
    Accuracy: data.accuracy,
  };

  return (
    <div className={classes.container}>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableHeader} align="left">
                Detail
              </TableCell>
              <TableCell className={classes.tableHeader} align="center">
                Value
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(details).map((key) => (
              <TableRow key={uuid()}>
                <TableCell className={classes.tableCell} align="left">
                  {key}
                </TableCell>
                <TableCell className={classes.tableCellCost} align="center">
                  {details[key] ? details[key].toString() : "-"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default UnitDetail;
