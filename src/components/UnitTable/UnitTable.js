import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

import classes from "./UnitTable.module.scss";

const UnitTable = () => {
  const units = useSelector((state) =>
    state.filteredData ? state.filteredData : state.units
  );

  const mapObject = (param) => {
    let string = "";
    Object.keys(param).map(
      (keyName) => (string += `${keyName} : ${param[keyName]}  `)
    );
    return string;
  };

  return (
    <div className={classes.container}>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableHeader} align="center">
                Id
              </TableCell>
              <TableCell className={classes.tableHeader} align="center">
                Name
              </TableCell>
              <TableCell className={classes.tableHeader} align="center">
                Age
              </TableCell>
              <TableCell className={classes.tableHeader} align="center">
                Costs
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {units.map((unit) => (
              <TableRow className={classes.tableRow} key={unit.id}>
                <TableCell className={classes.tableCell} align="center">
                  {unit.id}
                </TableCell>
                <TableCell className={classes.tableRow} align="center">
                  <Link className="unitLink" to={`/details/${unit.id}`}>
                    {unit.name}
                  </Link>
                </TableCell>
                <TableCell className={classes.tableRow} align="center">
                  {unit.age}
                </TableCell>
                <TableCell className={classes.tableRow} align="center">
                  {(unit.cost === null || undefined) && "no cost"}
                  {unit.cost && mapObject(unit.cost)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default UnitTable;
