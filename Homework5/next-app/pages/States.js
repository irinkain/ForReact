import React, { useState, useEffect } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
const columns = [
    { selector: 'state', name: 'state' },
    { selector: 'cases', name: 'cases' },
    { selector: 'todayCases', name: 'todayCases' },
    { selector: 'deaths', name: 'deaths' },
    { selector: 'todayDeaths', name: 'todayDeaths' },
    { selector: 'active', name: 'active' },
    { selector: 'tests', name: 'tests' },
    { selector: 'testsPerOneMillion', name: 'testsPerOneMillion' },
  ];

function States() {
  const [data, setData] = useState([]);
  const [Isloading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://corona.lmao.ninja/v2/states", [])
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  if (Isloading) {
    return <h1>Data is loading</h1>;
  }
return (
    <div>
        <DataTable
          title="States"
          columns={columns}
          data={data}
          pagination
        />
    </div>
  ); 
}
export default States;
