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
            <TableRow className={classes.tableRow}>
              <TableCell className={classes.tableCell} align="center">
                lorem ipsum
              </TableCell>
              <TableCell className={classes.tableRow} align="center">
                lorem ipsum
              </TableCell>
              <TableCell className={classes.tableRow} align="center">
                lorem ipsum
              </TableCell>
              <TableCell className={classes.tableRow} align="center">
                lorem ipsum
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default UnitTable;
