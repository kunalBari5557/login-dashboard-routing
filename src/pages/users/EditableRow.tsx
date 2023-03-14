import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { SelectChangeEvent } from '@mui/material';
import BorderColorTwoToneIcon from '@mui/icons-material/BorderColorTwoTone';

export default function EditableRow() {
    const [open, setOpen] = React.useState(false);
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState<DialogProps['maxWidth']>('sm');


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <BorderColorTwoToneIcon sx={{
                fontWeight: "bold",
                backgroundColor: "#233044",
                '&:hover': {
                    backgroundColor: '#233044',
                    opacity: [0.9, 0.8, 0.7],
                },
                color: 'white'
            }} onClick={handleClickOpen}>
                Add User
            </BorderColorTwoToneIcon>
            <Dialog
                fullWidth={fullWidth}
                maxWidth={maxWidth}
                open={open} onClose={handleClose}>
                <DialogTitle>Add User</DialogTitle>
                <DialogContent>
                    {/* <DialogContentText>
                        Create email
                    </DialogContentText> */}
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" sx={{ backgroundColor: "#BE2530" }} size="medium" onClick={handleClose}>Cancel</Button>
                    <Button variant="contained" sx={{ backgroundColor: "#233044" }} size="medium" onClick={handleClose}>Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}