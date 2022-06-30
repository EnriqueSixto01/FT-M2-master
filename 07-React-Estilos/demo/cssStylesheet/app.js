import React from 'react';
import { render } from 'react-dom';
import Producto from './src/components/Product.jsx';
import OtroComponente from './src/components/OtroComponente.js';

render(<div>
    <Producto title="Prueba" price={400}/>
    <OtroComponente title="Otro" price={133}/> 
    </div>, document.getElementById('app'));

//Ambos componentes van a tener el style del ultimo componente que fue invocado
//ya que ese ultimo component importa a un archivo .css y al hacerlo asi se genera
//interpreta de una forma global