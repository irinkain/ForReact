import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from 'next/router';
function Country() {
  const [data, setData] = useState({});
  const [Isloading, setIsLoading] = useState(true);
  const router = useRouter()
  console.log(router.query);
  useEffect(() => {
    axios
      .get("https://corona.lmao.ninja/v2/countries/"+router.query.country, {})
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
          if(typeof data[el] === 'object'){
              return Object.keys(data[el]).map((elem,index2) =>
              {
                  return(
                      <li class="list-group-item list-group-item-warning" key={index2}>
                        {data[el][elem]} : {elem}
                      </li>
                  );
              })
          }
        return (
            <li className="list-group-item list-group-item-warning" key={index}>
               {el}: 
              {data[el]}
            </li>
        );
      })}
      </ul>
    </div>
  );
}
export default Country;