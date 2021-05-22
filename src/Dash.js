import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
const useStyles = makeStyles({
  table: {
    minWidth: 650,
    maxWidth:1000,
    marginLeft:'20%',
    marginRight:'20%',
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

let rows = [
  createData( 6.0,254, 'ICICI'),
  createData( 9.0,45, 'Union'),
  createData( 16.0,42, 'Sunrise'),
  createData( 3.7,54, 'Union'),
  createData(16.0,65, 'ICICI'),
];

export default function Dash() {
  const classes = useStyles();
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
    <div>
      <div>Select Date : </div>
      <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
    </div>
    <TableContainer>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>sent</TableCell>
            <TableCell align="right">Recieved</TableCell>
            <TableCell align="right">Bank</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}