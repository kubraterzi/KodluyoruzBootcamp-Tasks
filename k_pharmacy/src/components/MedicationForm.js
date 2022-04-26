import React, { useContext, useEffect, useState } from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { MainContext } from "../context/MainContext";

function MedicationForm(props) {
  const { addNewMedication, editMedication } = useContext(MainContext);

  const [medication, setMedication] = useState({
    name: "",
    dose: "",
    expirationDate: "",
    quantity: "",
  });

  useEffect(() => {
    if (props.medication) {
      setMedication(props.medication);
    }
  }, [medication]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMedication({
      ...medication,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (props.manipulatingType === "add") {
      addNewMedication(medication);
      setMedication({
        ...medication,
        name: "",
        dose: "",
        expirationDate: "",
        quantity: "",
      });
    }

    if (props.manipulatingType === "edit") {
      editMedication(props.medication.id, medication);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <TextField
            id="outlined-basic"
            label="Medication Name"
            variant="outlined"
            name="name"
            value={medication.name}
            onChange={handleChange}
            />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="outlined-basic"
            label="Dose"
            variant="outlined"
            name="dose"
            value={medication.dose}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="outlined-basic"
            label="Expiration Date"
            variant="outlined"
            name="expirationDate"
            value={medication.expirationDate}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="outlined-basic"
            label="Quantity"
            variant="outlined"
            name="quantity"
            value={medication.quantity}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6} sx={{ mt: 3 }}>
          <Button
            variant="contained"
            size="large"
            sx={{ ml: 20, width: "70%" }}
            type="submit"
          >
            {props.manipulatingType}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default MedicationForm;
