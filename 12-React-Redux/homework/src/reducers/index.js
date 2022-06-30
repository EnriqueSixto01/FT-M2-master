import { ADD_MOVIE_FAVORITE, GET_MOVIES, GET_MOVIE_DETAIL, REMOVE_MOVIE_FAVORITE } from "../actions"

const initialState = {
  moviesFavourites: [],
  moviesLoaded: [],
  movieDetail: {}
}

export default function rootReducer(state=initialState, action){
    switch(action.type){
        case ADD_MOVIE_FAVORITE:
            return{
                ...state,
                moviesFavourites: [...state.moviesFavourites, action.payload]
            }
        case GET_MOVIES:
            return{
                ...state,
                moviesLoaded: action.payload.Search //el .Search es porque la respuesta de la API todo esta dentro de un array Search
            }
        case REMOVE_MOVIE_FAVORITE:
            return{
                ...state,
                moviesFavourites: state.moviesFavourites.filter((i)=> i.id !== action.payload) //con filter lo que hacemos es, cuando eliminamos un
                //item en funcion de su id, estamos devolviendo un nuevo array con aquellos id's que son diferenetes al que llega en action.payload
            }
        case GET_MOVIE_DETAIL:
            return{
                ...state,
                movieDetail: action.payload
            }
        default:
            return {...state};
    }
}