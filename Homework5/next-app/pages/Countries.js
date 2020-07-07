import React, { useState, useEffect } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import Router from 'next/router'

const columns = [
    { selector: 'updated', name: 'updated' },
    { selector: 'country', name: 'country' },
    { selector: 'cases', name: 'cases' },
    { selector: 'todayCases', name: 'todayCases' },
    { selector: 'deaths', name: 'deaths' },
    { selector: 'todayDeaths', name: 'todayDeaths' },
    { selector: 'recovered', name: 'recovered' },
    { selector: 'active', name: 'active' },
    { selector: 'casesPerOneMillion', name: 'casesPerOneMillion' },
    { selector: 'deathsPerOneMillion', name: 'deathsPerOneMillion' },
    { selector: 'tests', name: 'tests' },
    { selector: 'testsPerOneMillion', name: 'testsPerOneMillion' },
    { selector: 'continent', name: 'continent' }
  ];
function Countries() {
  const [data, setData] = useState([]);
  const [Isloading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get('https://corona.lmao.ninja/v2/countries?sort=country', [])
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
  const handleChange = event =>{
Router.push({
  pathname: '/Country',
  query: { country: event.country },
})
  }
  return (
    <div>
        <DataTable
          title="Countries"
          columns={columns}
          data={data}
          pagination
          onRowClicked={handleChange}
          pointerOnHover
        />
    </div>
  ); 
}
export default Countries;