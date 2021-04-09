import { createContext, useReducer, useEffect } from 'react'
import AppReducer from './AppReducer'

let initialState = {
    favorites: JSON.parse(localStorage.getItem('favorites')).length > 0 ?
        JSON.parse(localStorage.getItem('favorites')) : []
}

// create context
export const GlobalMovieContext = createContext(initialState);

// provider components
export const GlobalMovieProvider = props => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(state.favorites));
    }, [state])

    //actions
    const addMovieToFavorites = movie => {
        dispatch({ type: "ADD_MOVIE_TO_FAVORITES", payload: movie })
    }
    const removeMovieFromFavorites = (id) => {
        dispatch({ type: "REMOVE_MOVIE_FROM_FAVORITES", payload: id});
    }

    return (
        <GlobalMovieContext.Provider value={{ favorites: state.favorites, addMovieToFavorites, removeMovieFromFavorites }}>
            {props.children}
        </GlobalMovieContext.Provider>
    )
}