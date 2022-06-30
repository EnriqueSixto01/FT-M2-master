import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';



//constructor ---> render ---> componentDidMount()
//--> si no se despatch la accion que esta en el componentDidMount() y se renderiza de nuevo ------> no se muestra nada
//----------------------
//>si se despatch la accion correctamente ----> se llena el estado de movieDetail = {....}
//>como se actualizo el estado de Redux que es el mismo que estamos trayendo a este componente y que se reciben por props ---> UPDATE
//>de acuerdo al Life-cycle de un componente, este se renderizara cada vez que le llegue una nueva prop, entonces cada vez que el
//estado de Redux se actualiza es como si cada vez le llegara una nueva prop al componente <Movie/> y renderiza lo que tenga que renderizar
class Movie extends React.Component {

    componentDidMount(){//usamos esta funcion para hacer algo antes de renderizar el componente 
        const movieID = this.props.match.params.id //tomamos directamente el id de la url 
        this.props.getMovieDetail(movieID) //se despatch la accion y se agregara un nuevo objeto a la propiedad movieDetail del estado de
                                            //de Redux, eso quiere decir que hubo un cambio en las props que se reciben
    }

    render() {
        return (
            <div className="movie-detail">
              <h1>{this.props.detail.Title}</h1>
              <h2>{this.props.detail.Year}</h2>
              <h2>{this.props.detail.Genre}</h2>
              <img src={this.props.detail.Poster} alt='img'/>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        detail: state.movieDetail //usamos el estado de Redux para poder renderizar la info que queramos una vez 
                                //la propiedad movieDetail se haya actualizado con el objeto que se dispatching
    }
}

function mapDispatchToProps(dispatch){
    return{
        getMovieDetail: id => dispatch(getMovieDetail(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Movie);