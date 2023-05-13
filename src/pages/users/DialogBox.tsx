import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { SelectChangeEvent } from "@mui/material";

export default function DialogBox() {
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState<DialogProps["maxWidth"]>("sm");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        sx={{
          fontWeight: "bold",
          backgroundColor: "#233044",
          "&:hover": {
            backgroundColor: "#233044",
            opacity: [0.9, 0.8, 0.7],
          },
          color: "white",
        }}
        onClick={handleClickOpen}
      >
        Add User
      </Button>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
      >
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
          <TextField
            autoFocus
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#BE2530" }}
            size="medium"
            onClick={handleClose}
          >
            Close
          </Button>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#233044" }}
            size="medium"
            onClick={handleClose}
          >
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
