import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from 'react-bootstrap/Table'

function Jhucsse() {
  const [data, setData] = useState({});
  const [Isloading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get('https://corona.lmao.ninja/v2/jhucsse', {})
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
  var datacon;
  var formater = new Intl.NumberFormat();
  let i = 0;
  datacon = data.map((item) => {
      i = i + 1;
      return (
          <tr key={item.country}>
              <td>{i}</td>
              <td>{item.country}</td>
              <td>{item.province}</td>
              <td>{formater.format(item.stats.confirmed)}</td>
              <td>{formater.format(item.stats.deaths)}</td>
              <td>{formater.format(item.stats.recovered)}</td>
              <td>{item.updatedAt}</td>
          </tr>
      );
  });
  if(!Isloading)
  {
      return(
          <div className="mb-30" >
              <Table striped bordered hover variant="warning">
                  <thead>
                      <tr>
                          <th>#</th>
                          <th>Country</th>
                          <th>Province</th>
                          <th>Confirmd</th>
                          <th>Deaths</th>
                          <th>Recovered</th>
                          <th>Last Update</th>
                      </tr>
                  </thead>
                  <tbody>
                      {datacon}
                  </tbody>
              </Table>
          </div>
      )
  }
  else{
      return(
          <div>
              <div className="jumbotron" role="status">
                  <span className="sr-only">Loading...</span>
              </div>
              <br />
              <br />
          </div>
      )

  }
}
export default Jhucsse;
