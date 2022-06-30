import React, { useState } from 'react';

import './App.css';
import Nav from '../components/Nav.jsx';
import Cards from '../components/Cards.jsx';
import Ciudad from '../components/Ciudad';
import About from '../components/About';
import { Route } from 'react-router-dom';

const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

function App() {
  const [cities, setCities] = useState([]);
  
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }
  function onSearch(ciudad) {
    //Llamado a la API del clima
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {            //definimos este objeto solo con algunos datos que tomamos de la api, entoncesa cuando se 
                                      //actualice el estado cada objeto ciudad agregado al array tendra solo estos datos.
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);//cada vez que se actualize el estado se agregara un nuevo objeto ciudad
                                                        //al estado local de este componente.
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }
  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));//tenemos que convertir el id que se toma de la url a entero
                                                                  //y para ello usamos el parseInt
    if(ciudad.length > 0) { //si la longitud de ciudad que es un array es mayor a 0, es decir, hay al menos una ciudad 
        return ciudad[0]; //devolvemos el primer objeto ciudad del array
    } else {
        return null; //en caso contrario devolvemos null
    }
  }
  return (
    <div className="App">
      <Nav onSearch={onSearch}/>
  
      <Route path='/about' component={About}/>
      <Route exact path='/ciudad/:ciudadId' render={({match}) => <Ciudad city={onFilter(match.params.ciudadId)}/>}/>
      {/* el componente Route proporciona un objeto con las propiedades: history, location y match entonces al parametro del
      atributo render se le pueden mandar cualquiera de esas propiedades, nosotros solo usaremos a match por lo que nos conviene
      hacer destructuring */}
      <div>
        <Route exact path='/'>
        <Cards
          cities={cities}
          onClose={onClose}    
        />
        </Route>
      </div>
      <hr />
    </div>
  );
}

export default App;
