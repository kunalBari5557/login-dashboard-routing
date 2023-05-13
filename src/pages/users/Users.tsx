import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DialogBox from "./DialogBox";
import BorderColorTwoToneIcon from "@mui/icons-material/BorderColorTwoTone";
import DeleteIcon from "@mui/icons-material/Delete";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  ul: {
    "& .MuiPaginationItem-root": {
      backgroundColor: "#233044",
      "&:hover": {
        backgroundColor: "#233044",
        opacity: [0.9, 0.8, 0.7],
      },
    },
  },
}));

function createData(sno: number, emailAddress: string) {
  return { sno, emailAddress };
}

const rows = [
  createData(1, "kunal.aage@developer.tech"),
  createData(2, "kunal.aage@developer.tech"),
  createData(3, "kunal.aage@developer.tech"),
  createData(4, "kunal.aage@developer.tech"),
  createData(5, "kunal.aage@developer.tech"),
  createData(6, "kunal.aage@developer.tech"),
  createData(7, "kunal.aage@developer.tech"),
  createData(8, "kunal.aage@developer.tech"),
  createData(9, "kunal.aage@developer.tech"),
  createData(10, "kunal.aage@developer.tech"),
];

export default function UsersTable() {
  const classes = useStyles();
  const [currentPage, setCurrentPage] = React.useState(1);
  const rowsPerPage = 3;

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const displayedRows = rows.slice(startIndex, endIndex);
  return (
    <>
      <div style={{ marginLeft: "60rem" }}>
        <DialogBox />
      </div>
      <br></br>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Sno.</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Email Address</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Edit</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {displayedRows.map((row) => (
              <TableRow
                key={row.sno}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.sno}
                </TableCell>
                <TableCell align="left">{row.emailAddress}</TableCell>
                <TableCell align="left">
                  <BorderColorTwoToneIcon />
                </TableCell>
                <TableCell align="left">
                  <DeleteIcon />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Stack sx={{ mt: "2rem", ml: "25rem" }} spacing={2}>
        <Pagination
          color="standard"
          count={Math.ceil(rows.length / rowsPerPage)}
          page={currentPage}
          onChange={(event, value) => {
            setCurrentPage(value);
          }}
        />
      </Stack>
    </>
  );
}
