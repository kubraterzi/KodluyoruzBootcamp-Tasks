import React, { useState } from "react";

import AddMedication from "./addMadication/AddMedication";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import VaccinesIcon from "@mui/icons-material/Vaccines";

function Navbar() {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <Box sx={{ flexGrow: 1, mb: "1rem" }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <VaccinesIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            K Pharmacy
          </Typography>
          <Button color="inherit" onClick={handleOpen}>
            {" "}
            Add a Medication{" "}
          </Button>
        </Toolbar>
      </AppBar>
      <AddMedication open={open} handleClose={handleClose} />
    </Box>
  );
}

export default Navbar;
