import React, { useState } from "react";
import s from '../styles/SearchBar.module.css'
export default function SearchBar({onSearch}) {

  const [input, setInput] = useState("");

  //cada vez que se detecte un cambio en el input cuyo valor inicial es un "", va a ocurrir un evento de parte del 
  //listener onChange en donde la funcion setInput va a actualizar dicho estado en funcion del evento que se esta aplicando.
  //En este caso se aplica un event.target, es decir un evento a la etiqueta donde se encuentra, pero a la vez se aplica
  //al atributo value (el cual esta conectado con el estado local del componente) porque nuestra etiqueta es un <input/> 
  //entonces el estado se va  a actualizar cada vez que el ususario ingrese un caracter al inpu.
   handleOnChange = (event) => {
    setInput(event.target.value)
  }

   handleSubmit = (event) => {
    event.preventDefault();//preventDefaul() cancela el evento al cual se le aplica si este es cancelable, puede ser util 
    //cuando al hacer clic en un Submit boton, evite enviar un formulario y recargar la pagina
    onSearch(input); //input es lo que le llega finalmente a App para que busque en la API
    setInput("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ciudad..."
        value={input} //Al atrubuto value del input le asociamos el valor del estado que sera lo que se debe ir actualizando
        //cada vez que el usuario ingrese caracteres
        onChange={handleOnChange} //onChange activa la funcion handleOnChange cuando el usuario confirma un cambio de
        // valor en la etiqueta input
      />
      <input type="submit" value="Agregar" />
    </form>
  );
}
