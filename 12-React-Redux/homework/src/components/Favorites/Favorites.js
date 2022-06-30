import React, { Component } from "react";
import { connectAdvanced } from "react-redux";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { removeMovieFavorite } from "../../actions";
import './Favorites.css';

export class ConnectedList extends Component {

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {/* Aqui deberias poner tu lista de peliculas! */}
          {
            this.props.movie && this.props.movie.map(m =>(
              <div key={m.id }>
              <Link to={`/movie/${m.id}`}>
                <span>{m.title}</span>
                </Link>
                <button onClick={()=>this.props.removeMovieFavorite(m.id)}>x</button>
                </div>
            ))
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
     movie:state.moviesFavourites
      }
}

const mapDispatchToProps = (dispatch)=>{
 return{
  removeMovieFavorite: id => dispatch(removeMovieFavorite(id))
 }
}

export default connect(mapStateToProps,mapDispatchToProps) (ConnectedList);
