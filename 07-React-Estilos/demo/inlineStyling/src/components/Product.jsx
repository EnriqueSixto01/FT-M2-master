import React from 'react';

const divStyle = {
  margin: '40px',
  border: '5px solid pink',
};
const pStyle = {
  fontSize: '15px',
  textAlign: 'center',
};

//Ahora que nuestros estilos ya estan creados en formato object podemos agregar la variable al atributo style.
function Product(props) {
  return (
    <div style={divStyle}> 
      <h3>{props.title}</h3>
      <p style={pStyle}>{props.price}</p>
    </div>
  );
}

export default Product;
