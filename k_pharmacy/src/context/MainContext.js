import React, { createContext, useContext, useState } from "react";

const MainContext = createContext();

const medicationList = [
  {
    id: 1,
    name: "Albuterol HFA",
    dose: "2 puffs",
    condition: "Asthma",
    expirationDate: "11/02/2022",
    quantity: 90,
  },
  {
    id: 2,
    name: "Asprin",
    dose: "81 mg",
    condition: "Neuropathic Pain",
    expirationDate: "11/02/2022",
    quantity: 80,
  },
  {
    id: 3,
    name: "Beclomethasone HFA",
    dose: "2 puffs",
    condition: "Rheumatoid Arthritis",
    expirationDate: "11/02/2022",
    quantity: 45,
  },
  {
    id: 4,
    name: "Carveditol",
    dose: "12.5 mg",
    condition: "Depression",
    expirationDate: "11/02/2022",
    quantity: 60,
  },
  {
    id: 5,
    name: "Chlorthalidone",
    dose: "25 mg",
    condition: "Hypertansion",
    expirationDate: "11/02/2022",
    quantity: 70,
  },
  {
    id: 6,
    name: "Insulin Glargine",
    dose: "28 u",
    condition: "Diabetes",
    expirationDate: "11/02/2022",
    quantity: 60,
  },
  {
    id: 7,
    name: "Losartan",
    dose: "100 mg",
    condition: "Hypertansion",
    expirationDate: "11/02/2022",
    quantity: 35,
  },
  {
    id: 8,
    name: "Prednisone",
    dose: "20 mg",
    condition: "High Cholestrol",
    expirationDate: "11/02/2022",
    quantity: 50,
  },
  {
    id: 9,
    name: "Zolpidem",
    dose: "5 mg",
    condition: "Insomnia",
    expirationDate: "11/02/2022",
    quantity: 35,
  },
  {
    id: 10,
    name: "Arveles",
    dose: "500 mg",
    condition: "Anodyne",
    expirationDate: "11/02/2022",
    quantity: 90,
  },
  {
    id: 11,
    name: "Omeprazole",
    dose: "40 mg",
    condition: "GERD",
    expirationDate: "11/02/2022",
    quantity: 80,
  },
];

const MainContextProvider = ({ children }) => {
  const [medications, setMedications] = useState(medicationList);

  const addNewMedication = (medication) => {
    setMedications([...medications, medication]);
  };

  const editMedication = (id, medication) => {
    const indexOfMedication = medications.findIndex(
      (medication) => medication.id === id
    );
    const data = medications; // data = tempArray
    data[indexOfMedication] = medication;
    setMedications(data.slice());
  };

  const deleteMedication = (medication) => {
    setMedications(medications.filter((med) => med.id !== medication.id));
  };

  const data = {
    medications,
    addNewMedication,
    editMedication,
    deleteMedication,
  };

  return <MainContext.Provider value={data}>{children}</MainContext.Provider>;
};

export { MainContext, useContext, MainContextProvider };
