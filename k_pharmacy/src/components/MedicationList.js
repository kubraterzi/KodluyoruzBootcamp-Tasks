import React, { useState } from "react";

import { MainContext, useContext } from "../context/MainContext";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditMedication from "./editMadication/EditMedication";

import IconButton from "@mui/material/IconButton";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import RemoveIcon from "@mui/icons-material/Remove";

function MedicationList() {
  const { medications, deleteMedication, editMedication } =
    useContext(MainContext);

  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const [medication, setMedication] = useState("");

  const removeMedicationFromList = (medication) => {
    deleteMedication(medication);
  };

  const handleQuantity = (medication) => {
    medication.quantity -= 1;
    editMedication(medication.id, medication);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Medication</TableCell>
            <TableCell align="right">Dose</TableCell>
            <TableCell align="right">Condition</TableCell>
            <TableCell align="right">Expiration Date</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {medications.map((medication, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {medication.name}
              </TableCell>
              <TableCell align="right">{medication.dose}</TableCell>
              <TableCell align="right">{medication.condition}</TableCell>
              <TableCell align="right">{medication.expirationDate}</TableCell>
              <TableCell align="right">{medication.quantity}</TableCell>
              <TableCell align="right">
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                  onClick={() => handleQuantity(medication)}
                >
                  <RemoveIcon />
                </IconButton>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                  onClick={() => {
                    handleOpen();
                    setMedication(medication);
                  }}
                >
                  <ModeEditIcon />
                </IconButton>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                  onClick={() => removeMedicationFromList(medication)}
                >
                  <DeleteOutlineIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <EditMedication
        open={open}
        handleClose={handleClose}
        medication={medication}
      />
    </TableContainer>
  );
}

export default MedicationList;
