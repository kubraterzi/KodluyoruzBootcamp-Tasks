import React from 'react'

import MedicationForm from '../MedicationForm'

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";


function EditMedication(props) {

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    border: "2px solid blue",
    boxShadow: 24,
    p: 6,
  };

  return (
    <Modal
    open={props.open}
    onClose={props.handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={style}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Edit this Medication
      </Typography>
      <Typography id="modal-modal-description" component="h2" sx={{ mt: 2 }}>
        <MedicationForm manipulatingType="edit" />
      </Typography>
    </Box>
  </Modal>
  )
}

export default EditMedication