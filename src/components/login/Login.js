import { Box, Button, IconButton, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { AccountCircle, Lock } from "@mui/icons-material";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
const Login = () => {
  const [isshowPass, setIsShowPass] = useState(false);

  const showPass = () => {
    setIsShowPass(!isshowPass);
  };

  return (
    <div id="login" className="w-100 h-100 position-relative p-4 d-flex ">
      {/* <div className="w-50"></div> */}
      <div className="login-img-container  ">
        <img className="login-img " src="../img/login.png"></img>
      </div>
      <div className=" login-container bg-light h-100 ">
        <div className="logo  m-3 img-fluid">
          <img className="logo-img" src="../img/logo.png"></img>
        </div>
        <div className="login-field d-flex justify-content-center w-100">
          <div className="login-content my-3 " style={{ width: "45%" }}>
            <h3 className="fw-bolder mb-3">Sign In</h3>
            <form>
              <div className="text-center">
                <Box
                  className="mb-4 "
                  sx={{
                    width: "100%",
                    display: "flex",
                    alignItems: "flex-end",
                  }}
                  fullWidth
                >
                  <Lock sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                  <TextField variant="standard" size="small" label="Email" type={"email"} className="w-100" />
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    alignItems: "flex-end",
                  }}
                >
                  <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                  <TextField
                    variant="standard"
                    type={isshowPass ? "text" : "password"}
                    size="small"
                    label="Password"
                    className="w-100"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton aria-label="toggle password visibility" onClick={showPass} edge="end">
                            {isshowPass ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>

                <div>
                  <Link to={"/dashboard"}>
                    <Button
                      variant="contained"
                      type="submit"
                      placeholder="password"
                      className="btn-green p-2 w-75 my-4 text-uppercase "
                      color="success"
                    >
                      Sign in
                    </Button>
                  </Link>
                </div>
                <div className="d-flex justify-content-md-between ">
                  <div className="mb-4">
                    <label className="text-success form-check-label" style={{ cursor: "pointer" }}>
                      <input class="form-check-input" type="checkbox" value="" aria-label="Checkbox for following text input" />
                      {""} Remember Me
                    </label>
                  </div>
                  <div>
                    <a className="text-secondary">Forget Password</a>
                  </div>
                </div>
                <p>
                  Not a member? <a className=" text-success "> sign up </a>{" "}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
