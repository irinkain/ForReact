import React from 'react';
import './Card.css';

const Card = ({ title }) => {
  return (
    <div>
      <a href={`/detail/${title}`} className="card light-card">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1584356/figma.png"
          className="card-header light-header"
          alt="card"
        />
        <h3 className="card-title dark-text">{title}</h3>
        <p className="card-description dark-text">See joke</p>
      </a>
    </div>
  );
};

export default Card;
