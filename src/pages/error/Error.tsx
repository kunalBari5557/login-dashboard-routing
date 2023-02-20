import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import BorderColorTwoToneIcon from '@mui/icons-material/BorderColorTwoTone';
import DeleteIcon from '@mui/icons-material/Delete';

function createData(
    sno: number,
    errorlog: string,
    dateTime: string
) {
    return { sno, errorlog, dateTime };
}
const rows = [
    createData(1, 'success', '18/01/2023'),
    createData(2, 'falied', '18/01/2023'),
    createData(3, 'success', '18/01/2023'),
    createData(4, 'success', '18/01/2023'),
];

function Error() {
    return (
        <div style={{ display: "flex" }}>
            <Box
                sx={{
                    width: "120%",
                    maxWidth: '100%',
                    ml: 0
                }}
            >
                <h3 style={{ marginLeft: "-84rem" }}>Filters By Dates:</h3> <TextField select fullWidth label="Search" id="fullWidth" />
                <h2 style={{ marginTop: "3rem", marginLeft: "-85rem" }} >Latest Runs</h2>
                <TableContainer sx={{ mt: 5 }} component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ fontWeight: "bold" }}>Sno.</TableCell>
                                <TableCell sx={{ fontWeight: "bold" }}>Error log</TableCell>
                                <TableCell sx={{ fontWeight: "bold" }}>DateTime</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.sno}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.sno}
                                    </TableCell>
                                    <TableCell align="left">{row.errorlog}</TableCell>
                                    <TableCell align="left">{row.dateTime}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Stack sx={{ mt: "2rem", ml: "35rem" }} spacing={2}>
                    <Pagination count={5} color="standard" />
                </Stack>
            </Box>

        </div>
    )
}

export default Error