import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DetailJoke = (props) => {
  const [joke, setJoke] = useState(null);
  const {
    match: { params },
  } = props;
  const { categoryId } = params;
  useEffect(() => {
    axios
      .get(`https://api.chucknorris.io/jokes/random?category=${categoryId}`)
      .then((res) => {
        setJoke(res.data);
      });
  }, []);
  if (!joke) {
    return <h1>Is Loading</h1>;
  }
  return (
    <div>
      <h2 className="text-uppercase">Category : {categoryId}</h2>
      <br></br>
      <div className="container colored">{joke.value}</div>
    </div>
  );
};

export default DetailJoke;
