import React from "react";
import "./Card.css";

const Card = ({ item }) => {

  return (
    <div className="card_wrapper">
      <div className="card">
        <h4>ID {item.id}</h4>
         <p>commnet  {item.name}</p>
         <p>email {item.email}</p>
      </div>
    </div>
  );
};

export default Card;
