import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { ChartComponent } from "./components/ChartComponent";

function App() {
  const [graphdata, Setgraphdata] = useState([]);

  const [fgraphdata, Setfgraphdata] = useState([]);
  const [sgraphdata, Setsgraphdata] = useState([]);
  const [dgraphdata, Setdgraphdata] = useState([]);

  const [bgraphdata, Setbgraphdata] = useState([]);

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

  // first
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


  // binance
	useEffect(() => {
		axios
		  .get(
			"https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1m&limit=1000"
		  )
		  .then((response) => {
			
			const sdata = response.data.map(d=>{
				return{time:d[0]/1000,open:parseFloat(d[1]),high:parseFloat(d[1]),low:parseFloat(d[3]),close:parseFloat(d[4])}
			})
			console.log(response.data)
			Setbgraphdata(sdata)
			});
		});


    // second

    useEffect(() => {
      axios
        .get(
        "https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1m&limit=1000"
        )
        .then((response) => {
        
        const sdata = response.data.map(d=>{
          return{time:d[0]/1000,open:parseFloat(d[1]),high:parseFloat(d[1]),low:parseFloat(d[3]),close:parseFloat(d[4])}
        })
        console.log(response.data)
        Setfgraphdata(sdata)
        });
      });


      // third

      useEffect(() => {
        axios
          .get(
          "https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1m&limit=1000"
          )
          .then((response) => {
          
          const sdata = response.data.map(d=>{
            return{time:d[0]/1000,open:parseFloat(d[1]),high:parseFloat(d[1]),low:parseFloat(d[3]),close:parseFloat(d[4])}
          })
          console.log(response.data)
          Setsgraphdata(sdata)
          });
        });

// fourth
        useEffect(() => {
          axios
            .get(
            "https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1m&limit=1000"
            )
            .then((response) => {
            
            const sdata = response.data.map(d=>{
              return{time:d[0]/1000,open:parseFloat(d[1]),high:parseFloat(d[1]),low:parseFloat(d[3]),close:parseFloat(d[4])}
            })
            console.log(response.data)
            Setdgraphdata(sdata)
            });
          });


	
  return (
    <div className="App">
      {/* <ChartComponent data={initialData} /> */}
	  <h1>csv</h1>
      <ChartComponent data={graphdata} data1={fgraphdata} data2={sgraphdata} data3={dgraphdata} />
	  <h1>binance</h1>

      <ChartComponent data={bgraphdata} />
    </div>
  );
}

export default App;
