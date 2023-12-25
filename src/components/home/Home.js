import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { Fragment } from "react";
import RealtimeLineChart from "./RealtimeLineChart";
import  Chart  from 'react-apexcharts';

const Home = () => {

  
  const TIME_RANGE_IN_MILLISECONDS = 30 * 1000;
  const ADDING_DATA_INTERVAL_IN_MILLISECONDS = 1000;
  const ADDING_DATA_RATIO = 0.8;
  const nameList = ["a", "b", "c"];
  const defaultDataList = nameList.map((name) => ({
    name: name,
    data: [],
  }));
  const [dataList, setDataList] = React.useState(defaultDataList);

  React.useEffect(() => {
    const addDataRandomly = (data) => {
      if (Math.random() < 1 - ADDING_DATA_RATIO) {
        return data;
      }
      return [
        ...data,
        {
          x: new Date(),
          y: data.length * Math.random(),
        },
      ];
    };
    const interval = setInterval(() => {
      setDataList(
        dataList.map((val) => {
          return {
            name: val.name,
            data: addDataRandomly(val.data),
          };
        })
      );
    }, ADDING_DATA_INTERVAL_IN_MILLISECONDS);

    return () => clearInterval(interval);
  });


 const options= {
    chart: {
      id: "basic-bar"
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
    }
  }

const series= [
  {
    name: "series-1",
    data: [30, 40, 45, 50, 49, 60, 70, 91]
  }
]


  return (
    <Fragment>
      <header className="p-3">
        <div className="header-field">
          <div className="header-content row">
            <div className="d-flex align-items-baseline justify-content-center col-3">
              Patient name:{""}
              <div>
                <p className="lead">Abbas Ghaderi</p>
              </div>
            </div>
            <div className="col-3 d-flex justify-content-center align-items-baseline ">
              Gender:{" "}
              <div>
                <p className="lead">Male</p>
              </div>
            </div>
            <div className="col-3 d-flex justify-content-center align-items-baseline ">
              Doctor name:{" "}
              <div>
                <p className="lead">Dr Rezaei</p>
              </div>
            </div>
            <div className="col-3 d-flex justify-content-center align-items-baseline ">
              <FormControl>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                  size="small"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={""}
                  label="Age"
                  onChange={""}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <FormControl>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                  size="small"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={""}
                  label="Age"
                  onChange={""}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
        </div>
      </header>
      <div className="home-container d-grid">
        <div className="home-field">
          <div className="home-content">
            <div className="chart">
              {" "}
              <Chart
              options={options}
              series={series}
              type="bar"
              width="500"
            />
            </div>
            <div className="chart  ">
              <RealtimeLineChart
                dataList={dataList}
                range={TIME_RANGE_IN_MILLISECONDS}
              />
            </div>
            <div className="chart">
              {" "}
              <RealtimeLineChart
                dataList={dataList}
                range={TIME_RANGE_IN_MILLISECONDS}
              />
            </div>
            <div className="chart">
              {" "}
              <RealtimeLineChart
                dataList={dataList}
                range={TIME_RANGE_IN_MILLISECONDS}
              />
            </div>
            <div className="chart">
              {" "}
              <RealtimeLineChart
                dataList={dataList}
                range={TIME_RANGE_IN_MILLISECONDS}
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
