import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from '../Card/Card';

function Categories() {
  const [data, setData] = useState({});
  const [Isloading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get('https://api.chucknorris.io/jokes/categories', {})
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
    <div className="container-wrapper">
      <div className="container">
        <div className="card-wrapper-container">
          {data.map((el) => {
            return <Card title={el} />;
          })}
        </div>
      </div>
    </div>
  );
}
export default Categories;
