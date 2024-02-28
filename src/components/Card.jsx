import React from "react";

const Card = ({mascota, color}) => {
  return <div>
    <h2>La mascota es: {mascota}</h2>
    <h2>El color es: {color}</h2>
  </div>;
};

export default Card;
