import React, {useState} from "react";
//import "./App.css";
import Cards from "./components/Cards.jsx";
//import cities from "./data.js";
import Nav from "./components/Nav.jsx";

export default function App() {
  const [cities, setCities] = useState([]);

  const apiKey ='4ae2636d8dfbdc3044bede63951a019b';

  function onSearch(city) {//city aqui es el estado local de SearchBar utilizado para solicitar la info de la API
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`) //llamada a la API
    .then(response => response.json()) //response es la respuesta del servidor y la tenemos que pasar a fortmato json
    .then(data => {                 //data es el resultado de la conversion de la respuesta json
      if(data.main !== undefined){
        const city = {
          min: Math.round(data.main.temp_min),
          max: Math.round(data.main.temp_max),
          name: data.name,
          img: data.weather[0].icon,
          id: data.id,
          wind: data.wind.speed,
          temp: data.main.temp,       
        };
        setCities(oldCities => [...oldCities, city]); //usamos la funcion setCities para poder actualizar el estado, como 
        //anteriormente vimos, es mejor practica proporcionar un argumento como valor previo, y en este caso lo que retornara
        //la funcion que estamos definiendo es una copia del estado concatenandole objeto con las props que recibimos de la API
      } else {
        alert("Ciudad no encontrada");
      }
    });
  };

  function onClose(id){
      setCities(oldCities => oldCities.filter(c => c.id !== id))
  }

  return (
    <div className="App">
       <Nav onSearch={onSearch}/>
       <Cards cities={cities} onClose={onClose}/>
        {/* Cada vez que se agregue una ciudad el estado cities se va a actualizar agregando esa ciudad a nuestro valor 
        inicial que le dimos al estado, que es un array vacio */}
      
    </div>
  );
//console.log(data)
}
