import "./App.css";

import Navbar from "./components/Navbar";
import { MainContextProvider } from "./context/MainContext";

import Container from "@mui/material/Container";
import MedicationList from "./components/MedicationList";
import React from "react";

function App() {
  return (
    <MainContextProvider>
      <Container sx={{ width: "60%", mt: "1rem", mr: "auto", ml: "auto" }}>
        <Navbar />
        <MedicationList />
      </Container>
    </MainContextProvider>
  );
}

export default App;
