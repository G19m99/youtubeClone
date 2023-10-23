import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Box } from "@mui/material";

const AddCategoryModal = ({ open, handleClose }) => {
  const [category, setCategory] = React.useState("");

  const handleAdd = () => {
    handleClose(category);
  };
  return (
    <Dialog open={open} onClose={handleClose}>
      <Box sx={{ backgroundColor: "#000", color: "whitesmoke" }}>
        <DialogTitle>Add Category</DialogTitle>
        <DialogContent>
          <DialogContentText color="whitesmoke">
            To Add a category enter the name below
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Category name"
            type="text"
            fullWidth
            variant="standard"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            InputProps={{
              style: { color: "whitesmoke" },
            }}
            InputLabelProps={{
              style: { color: "whitesmoke" },
            }}
            sx={{
              "& .MuiInput-underline:before": {
                borderBottomColor: "whitesmoke",
              },
              "& .MuiInput-underline:after": {
                borderBottomColor: "whitesmoke",
              },
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{ color: "whitesmoke" }}>
            Cancel
          </Button>
          <Button onClick={handleAdd} sx={{ color: "whitesmoke" }}>
            Add
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
};

export default AddCategoryModal;
