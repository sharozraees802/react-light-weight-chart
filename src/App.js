import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { ChartComponent } from "./components/ChartComponent";

function App() {
  const [graphdata, Setgraphdata] = useState([]);

  //   const initialData = [
  // 	{ time: '2018-12-22', value: 32.51 },
  // 	{ time: '2018-12-23', value: 31.11 },
  // 	{ time: '2018-12-24', value: 27.02 },
  // 	{ time: '2018-12-25', value: 27.32 },
  // 	{ time: '2018-12-26', value: 25.17 },
  // 	{ time: '2018-12-27', value: 28.89 },
  // 	{ time: '2018-12-28', value: 25.46 },
  // 	{ time: '2018-12-29', value: 23.92 },
  // 	{ time: '2018-12-30', value: 22.68 },
  // 	{ time: '2018-12-31', value: 22.67 },
  // ];

  useEffect(() => {
    axios
      .get(
        "https://res.cloudinary.com/lastshop802/raw/upload/v1673178504/data_bunkgy.csv"
      )
      .then((response) => {
        const cdata = response.data.split("\n").map((row) => {
          const [time1, time2, open, high, low, close] = row.split(",");
          return {
            time: new Date(`${time1}, ${time2}`).getTime() / 1000,
            open: open * 1,
            high: high * 1,
            low: low * 1,
            close: close * 1,
          };
        });
          Setgraphdata(cdata)
		});
	},[]);
	
	console.log("🚀 ~ file: App.js:46 ~ cdata ~ graphdata", graphdata);
  return (
    <div className="App">
      {/* <ChartComponent data={initialData} /> */}
      <ChartComponent data={graphdata} />
    </div>
  );
}

export default App;
