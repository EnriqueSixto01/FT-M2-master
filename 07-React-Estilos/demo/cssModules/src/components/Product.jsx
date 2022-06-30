import React from 'react';
import s from  './Product.css'; //s ={} donde se van a alojar todos los estilos del archivo .css

//s va a ser un objeto asociado a las clases dentro de Product.css
//cuando pasamos mas de dos clases usamos template string
//cuando solo pasamos una sola clase podemos pasarla sin template string
function Product(props) {
  console.log('esto es s:', s);
  //hola: "hola___1pzmN"
  //producto: "producto___10xp5"
  return (
    <div className={`${s.producto} ${s.hola}`}>
      <h3 className={s.hola}>{props.title}</h3>
      <p>{props.price}</p>
    </div>
  );
}

export default Product;
