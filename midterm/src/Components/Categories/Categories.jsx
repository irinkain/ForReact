import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from 'react-bootstrap';
import Login from '../../Login/Login';
function Categories() {
  const [data, setData] = useState({});
  const [Isloading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://api.chucknorris.io/jokes/categories", {})
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
            {Object.keys(data).map((el) => {
            return (
            <Card border="dark" style={{ width: "18rem" }}>
                <Card.Body>
                <Card.Title>{data[el]}</Card.Title>
                <Button variant="primary" onClick={Login}>See joke </Button>
                </Card.Body>
            </Card>);
    })}
    </div>
     );
}
export default Categories;
