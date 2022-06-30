import React from "react";
import s from "../styles/Card.module.css";
export default function Card({ onClose, name, min, max, img, id }) {
  // acá va tu código
  return (
    <>
      <div className={s.card}>
        <button onClick={onClose} className={s.btn}>X</button>
        <h4 className= {s.text}>{name}</h4>
        <div>
          <img
            className={s.img}
            src={`http://openweathermap.org/img/wn/${img}@2x.png`}
            alt="clima"
          />
        </div>
        <div className={s.textmargin}>
          <div className={s.text}>
            <p>Min</p>
            <p>{min}°</p>
          </div>
          <div className={s.text}>
            <p>Max</p>
            <p>{max}°</p>
          </div>
         
        </div>      
      </div>
    </>
  );
}
