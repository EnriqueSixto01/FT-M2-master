import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { addMovieFavorite, getMovies } from "../../actions";
import './Buscador.css';



export class Buscador extends Component {
 //en un componente de clase se accede a las propiedades asi: this.props.<prop pasada porparametro>
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value }); //no hace falta dehacer unacopia del estado porque solo tenemos una propiedad
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title)
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">Película: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
        <ul>
         {/* Aqui tienes que escribir tu codigo para mostrar la lista de peliculas */}
         {
            this.props.movies && this.props.movies.map(m => (
              <div key ={m.imdbID}>
               <Link to={`/movie/${m.imdbID}`}>
                  {m.Title}
               </Link>
               <button onClick={()=>this.props.addMovieFavorite({title:m.Title, id:m.imdbID})}> Fav </button>
              </div>
            ))
         }
        </ul>
      </div>
    );
  }
}

// export function Buscador(props){

//   const[title, setTitle] = useState('')


    
//   function handleChange(e) {
//     setTitle(e.target.value) //no hace falta dehacer unacopia del estado porque solo tenemos una propiedad
//   }
//   function handleSubmit(e) {
//     e.preventDefault();
//     props.getMovies(title)
//   }
//     return (
//       <div>
//         <h2>Buscador</h2>
//         <form className="form-container" onSubmit={(e) => handleSubmit(e)}>
//           <div>
//             <label className="label" htmlFor="title">Película: </label>
//             <input
//               type="text"
//               id="title"
//               autoComplete="off"
//               value={title}
//               onChange={(e) => handleChange(e)}
//             />
//           </div>
//           <button type="submit">BUSCAR</button>
//         </form>
//         <ul>
//          {/* Aqui tienes que escribir tu codigo para mostrar la lista de peliculas */}
//          {this.props.movies && this.props.movies.map(m => {

//          })}
//         </ul>
//       </div>
//     );
// }




const mapStateToProps = (state) => {
  return {
    movies: state.moviesLoaded //requerimos esta propiedad del state de Redux porque ahi se alojan todas las movies que nos mando
                                //por respuesta la API
  }
}

const mapDispatchToProps =(dispatch) =>{
  return{
  addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
  getMovies: title => dispatch(getMovies(title))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Buscador);
