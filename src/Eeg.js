import React, { Fragment } from "react";
import { Route, Routes } from "react-router";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import MainLayout from "./components/mainLayout/MainLayout";
import PatientInfo from "./components/patient info/PatientInfo";
import PatientRegister from "./components/patient register/PatientRegister";

const Eeg = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route exact path="/dashboard" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="patient-register" element={<PatientRegister />} />
          <Route path="patient-Info" element={<PatientInfo />} />
        </Route>
      </Routes>
    </>
  );
};

export default Eeg;
