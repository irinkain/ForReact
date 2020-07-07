import React, { useState, useEffect } from "react";
import axios from "axios";
function All() {
  const [data, setData] = useState({});
  const [Isloading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://corona.lmao.ninja/v2/all", {})
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
      <ul className="list-group list-group-flush">
      {Object.keys(data).map((el,index) => {
        return (
            <li className="list-group-item list-group-item-warning" key={index}>
              {el.replace(/([A-Z]+)/g, " $1").replace(/([A-Z][a-z])/g, " $1")}:{" "}
              {data[el]}
            </li>
        );
      })}
      </ul>
    </div>
  );
}
export default All;
// მახინჯია მაგრამ უფრო ლამაზად ვერ გავაკეთე