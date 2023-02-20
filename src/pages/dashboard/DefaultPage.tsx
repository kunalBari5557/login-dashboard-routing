import React from 'react';
import Steppers from './Stepper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import MainLayout from '../../components/layout/MainLayout';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import BorderColorTwoToneIcon from '@mui/icons-material/BorderColorTwoTone';
import DeleteIcon from '@mui/icons-material/Delete';
import Pagination from '@mui/material/Pagination';

function createData(
  date: string,
  step1: string,
  step2: string,
  step3: string
) {
  return { date, step1, step2, step3 };
}
const rows = [
  createData('18/01/2023', 'success', 'success', 'failed'),
  createData('18/01/2023', 'success', 'success', 'failed'),
  createData('18/01/2023', 'success', 'success', 'failed'),
  createData('18/01/2023', 'success', 'success', 'failed'),
];

type Props = {};

const DefaultPage = (props: Props) => {
  return (
    <div>
      <Box
        sx={{
          width: "120%",
          maxWidth: '100%',
          ml: 0,
          mb: "-7rem"
        }}
      >
        <TextField
          fullWidth
          id="outlined-read-only-input"
          defaultValue="Today- 17/01/2023"
          InputProps={{
            readOnly: true,
          }}
        />
      </Box>
      <Steppers />
      <h2 style={{ marginTop: "3rem", marginLeft: "-85rem" }} >Latest Runs</h2>
      <TableContainer sx={{ mt: 5 }} component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Date</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Step 1</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Step 2</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Step 3</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.date}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.date}
                </TableCell>
                <TableCell align="left">{row.step1}</TableCell>
                <TableCell align="left">{row.step2}</TableCell>
                <TableCell align="left">{row.step3}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Stack sx={{ mt: "2rem", ml: "35rem" }} spacing={2}>
        <Pagination count={5} color="standard" />
      </Stack>
    </div>
  );
};

export default DefaultPage;