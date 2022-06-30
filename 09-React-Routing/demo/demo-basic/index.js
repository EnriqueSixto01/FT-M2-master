import React from 'react';
import { render } from 'react-dom';
import { Route, Switch, useParams, HashRouter as Router } from 'react-router-dom'; //a HashRouter se le puso un alias omo Router

import About from './About.jsx';
import Ejemplo from './Ejemplo.jsx';
import NavBar from './NavBar.jsx';

function Home(props) {
  let params =useParams(); //en la variable params se aloja un objeto con los parametros que se le hayan pasado por
                          // path (url)
  console.log('Soy los parametros de la ruta: ', params)
  return (
    <div>
      {/* <h2>Home, Soy Henry!! Soy la Ciudad de: {props.match.params.id}</h2> */}
      {/* Una manera mas facild e hacer la line anterior es con el hook useParams */}
      <h2>Home, Soy Henry!! Soy la Ciudad de: {params.id}</h2>
    </div>
  );
};

//<Route/>simepre nos va a dar 3 props fundamentales las cuales podemos mandar al render y tambien 
//envarselas a un componente para por ejemplo dependiendo de lo qu se coloque en la url se renderize cierta info
const Root = (
  <Router>
    <NavBar /> 
    <Switch>
      {/* <Route exact path='/:id' render={({location, match}) => <Home location={location} match={match}/>}>  */}
      {/* con el hook useParams ya no necesitamos pasar la propiedad match porque internamente al useParams
      se le pasa la propiedad match*/}
      <Route exact path='/:id' render={({location}) => <Home location={location}/>}> 
      {/* '/: <nombre que queramos darle a la propiedad a crear> o si queremos mandar mas propiedades podemos hacer lo
      siguiente '/:id/:ciudad , cuyos valores seran recibidos en props del componente pero desde la url, 
      y que posteriormente sera renderizado  
*/}
        {/* <Home /> */}
      </Route>
      {/* <Route path="/about/other">
        <h2>About Other</h2> 
      </Route> */}
      <Route path="/about" sensitive>
        <About />
      </Route>
      <Route path="/aboutttttt">
        <h2>Aboutttttt</h2>
      </Route>
      <Route path="/about/other">
        <h2>About Other</h2>
      </Route>
      <Route path="/ejemplo">
        <Ejemplo nombre="Toni" apellido="Tralice"/>
      </Route>
      <Route path="/">
        <h2>Ruta por Default</h2>
      </Route>
    </Switch>
  </Router>
);

render(Root, document.querySelector('#app'));

