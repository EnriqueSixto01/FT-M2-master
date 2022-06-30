export const ADD_MOVIE_FAVORITE = "ADD_MOVIE_FAVORITE";
export const REMOVE_MOVIE_FAVORITE = "REMOVE_MOVIE_FAVORITE";
export const GET_MOVIE_DETAIL = "GET_MOVIE_DETAIL";
export const GET_MOVIES = "GET_MOVIES";

export function addMovieFavorite(movie) {
  //payload sera el nombre de la Pelicula
  return { type: ADD_MOVIE_FAVORITE, payload:movie};
}

export function removeMovieFavorite(id) {
  //payload sera la pelicula a eliminar.
  return { type: REMOVE_MOVIE_FAVORITE, payload:id };
}

export function getMovieDetail(id) {
  //payload sera el objeto con los detalles de la pelicula que seleccionamos.
  return function (dispatch) {
    return fetch(`https://www.omdbapi.com/?apikey=d1dcdf9c&i=${id}`)
      .then((response) => response.json())
      .then((detail) => {
        dispatch({ type: GET_MOVIE_DETAIL, payload: detail });
      });
  };
}

export function getMovies(title) {
  return (dispatch) => {
    return fetch(`https://www.omdbapi.com/?apikey=d1dcdf9c&s=${title}`)
      .then((response) => response.json())
      .then((movie) => {
        dispatch({ type: GET_MOVIES, payload: movie }); // payload sera el objeto que recibamos de nuestra request.
      });
  };
}

//https://www.omdbapi.com/?apikey=d1dcdf9c&s=batman
