import {
  Box,
  FilledInput,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Input,
  InputLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { borderColor } from "@mui/system";
import React from "react";
import Button from "@mui/material/Button";

const PatientRegister = () => {
  return (
    <div id="register">
      <header className="header  d-flex justify-content-between align-items-center mb-5 ">
        <h2>Patient Register</h2>
      </header>
      <div className="reg-container  mt-5">
        <div className="reg-field ">
          <div className="reg-content  align-itens-center text-center m-auto">
            <FormControl fullWidth className=" mb-3">
              <TextField
                size="small"
                label="Patient Name"
                variant="outlined"
                placeholder=""
              />
            </FormControl>
            <FormControl fullWidth className="   mb-3">
              <TextField
                size="small"
                label="Patient Name"
                variant="outlined"
                placeholder=""
              />
            </FormControl>

            <FormControl className="w-25 mb-3">
              <TextField
              type={"number"}
                size="small"
                label="Age"
                variant="outlined"
                placeholder=""
              />
            </FormControl>

            <FormControl sx={{ display: "inline" }} className="  mb-3">
              <RadioGroup row sx={{ display: "inline", alignItems: "center" }}>
                <FormLabel sx={{ mx: 1 }}>Gender</FormLabel>
                <FormControlLabel
                  value="female"
                  control={<Radio size="small" />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio size="small" />}
                  label="Male"
                />
              </RadioGroup>
            </FormControl>

            <FormControl fullWidth className="   mb-3">
              <TextField
                size="small"
                label="Patient Name"
                variant="outlined"
                placeholder=""
              />
            </FormControl>
            <FormControl fullWidth className="   mb-3">
              <TextField
                size="small"
                label="Patient Name"
                variant="outlined"
                placeholder=""
              />
            </FormControl>
            <FormControl fullWidth className=" mb-4">
              <TextField
                size="small"
                label="Patient Name"
                variant="outlined"
                placeholder=""
              />
            </FormControl>
            <div>
            
              <Button
                    variant="contained"
                    color="success"
                    size="small"
                    className="btn-green p-2 w-50 "
                  >Submit</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientRegister;
