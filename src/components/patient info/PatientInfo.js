import React, { Fragment } from "react";
import Button from "@mui/material/Button";
import { Box, Stack } from "@mui/system";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { CSVLink } from "react-csv";
import jsPDF from "jspdf";
import {} from "jspdf-autotable"
const PatientInfo = () => {
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];


const downloadPdf=()=>{
  const pdf= new jsPDF()
  pdf.autoTable({html:"#table"})
  pdf.save("data-table")
}

  return (
    <Fragment>
      <header className="header  d-flex justify-content-between align-items-center ">
        <div>
          <h2>Patient Information</h2>
          <p className="">You can see the list of your users here</p>
        </div>
        <div className="position-relative">
          <label>
            Search:
            <i className="fa fa-search position-absolute search-icon"></i>
            <input className="search-input"></input>
          </label>
        </div>
      </header>
      {/* <div className="output-btn-container  ms-auto "> */}
      <Box className="text-end" sx={{ "& button": { m: 1 } }}>
        <CSVLink
        data={rows}
          filename="table-data"
          className="btn-border-green btn-radius my-4 mx-1 "
        >
          Ecxel
        </CSVLink>
        <Button
          variant="contained"
          color="success"
          size="large"
          className="btn-radius  my-4 mx-1"
          onClick={downloadPdf}
        >
          Print
        </Button>

      </Box>
      {/* </div>  */}
      <Paper className="table-field">
        <TableContainer className="table-container" sx={{ maxHeight: 440 }}>
          <Table className="table " id="table" >
            <TableHead className="thead bg-light" >
              <TableRow>
                <TableCell align="center">Patient Name</TableCell>
                <TableCell align="center">Gender</TableCell>
                <TableCell align="center">Tel</TableCell>
                <TableCell align="center">Age</TableCell>
                <TableCell align="center">Special Disease</TableCell>
                <TableCell align="center">Doctor</TableCell>
                <TableCell align="center">Date Of Registeration</TableCell>
                <TableCell align="center">Description</TableCell>
                <TableCell align="center">Test Registeration</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {rows.map(row=>(

              <TableRow key={row.name}  >
                <TableCell scope="row" >{row.name}</TableCell>
                <TableCell>{row.calories}</TableCell>
                <TableCell>{row.fat}</TableCell>
                <TableCell>{row.carbs}</TableCell>
                <TableCell>{row.protein}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell className="text-center">
                  <Button
                    variant="contained"
                    color="success"
                    size="small"
                    className="btn-green m-1"
                  >
                    Test Registeration
                  </Button>
                  <Button
                    variant="contained"
                    color="success"
                    size="small"
                    className="btn-green m-1"
                  >
                    Show default
                  </Button>
                  {/* <button className=" btn-green d-block p-1 m-1">
                Show default
              </button> */}
                </TableCell>
              </TableRow>
            ))}
              {/* <TableRow>
                <TableCell scope="row">1</TableCell>
                <TableCell>Mark</TableCell>
                <TableCell>Otto</TableCell>
                <TableCell>@mdo</TableCell>
                <TableCell>@mdo</TableCell>
                <TableCell>@mdo</TableCell>
                <TableCell>@mdo</TableCell>
                <TableCell>@mdo</TableCell>
                <TableCell className="text-center">
                  <Button
                    variant="contained"
                    color="success"
                    size="small"
                    className="btn-green m-1"
                  >
                    Test Registeration
                  </Button>
                  <Button
                    variant="contained"
                    color="success"
                    size="small"
                    className="btn-green m-1"
                  >
                    Show default
                  </Button>
                </TableCell>
              </TableRow> */}

              {/* <TableRow>
            <TableCell scope="row">1</TableCell>
            <TableCell>Mark</TableCell>
            <TableCell>Otto</TableCell>
            <TableCell>@mdo</TableCell>
            <TableCell>@mdo</TableCell>
            <TableCell>@mdo</TableCell>
            <TableCell>@mdo</TableCell>
            <TableCell>@mdo</TableCell>
            <TableCell className="text-center">
            <Button variant="contained" color="success" size="small" className="btn-radius m-1">
                Test Registeration
              </Button>
              <Button variant="contained" color="success" size="small" className="btn-radius m-1">Show default</Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell scope="row">1</TableCell>
            <TableCell>Mark</TableCell>
            <TableCell>Otto</TableCell>
            <TableCell>@mdo</TableCell>
            <TableCell>@mdo</TableCell>
            <TableCell>@mdo</TableCell>
            <TableCell>@mdo</TableCell>
            <TableCell>@mdo</TableCell>
            <TableCell className="text-center">
            <Button variant="contained" color="success" size="small" className="btn-radius m-1">
                Test Registeration
              </Button>
              <Button variant="contained" color="success" size="small" className="btn-radius m-1">Show default</Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell scope="row">1</TableCell>
            <TableCell>Mark</TableCell>
            <TableCell>Otto</TableCell>
            <TableCell>@mdo</TableCell>
            <TableCell>@mdo</TableCell>
            <TableCell>@mdo</TableCell>
            <TableCell>@mdo</TableCell>
            <TableCell>@mdo</TableCell>
            <TableCell className="text-center">
            <Button variant="contained" color="success" size="small" className="btn-radius m-1">
                Test Registeration
              </Button>
              <Button variant="contained" color="success" size="small" className="btn-radius m-1">Show default</Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell scope="row">1</TableCell>
            <TableCell>Mark</TableCell>
            <TableCell>Otto</TableCell>
            <TableCell>@mdo</TableCell>
            <TableCell>@mdo</TableCell>
            <TableCell>@mdo</TableCell>
            <TableCell>@mdo</TableCell>
            <TableCell>@mdo</TableCell>
            <TableCell className="text-center">
            <Button variant="contained" color="success" size="small" className="btn-radius m-1">
                Test Registeration
              </Button>
              <Button variant="contained" color="success" size="small" className="btn-radius m-1">Show default</Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell scope="row">1</TableCell>
            <TableCell>Mark</TableCell>
            <TableCell>Otto</TableCell>
            <TableCell>@mdo</TableCell>
            <TableCell>@mdo</TableCell>
            <TableCell>@mdo</TableCell>
            <TableCell>@mdo</TableCell>
            <TableCell>@mdo</TableCell>
            <TableCell className="text-center">
            <Button variant="contained" color="success" size="small" className="btn-radius m-1">
                Test Registeration
              </Button>
              <Button variant="contained" color="success" size="small" className="btn-radius m-1">Show default</Button>
            </TableCell>
          </TableRow>  */}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Fragment>
  );
};

export default PatientInfo;
