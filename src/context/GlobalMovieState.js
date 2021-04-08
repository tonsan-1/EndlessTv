import { createContext, useReducer, useEffect } from 'react'
import AppReducer from './AppReducer'

// initial state 
const initialState = {
    favorites: []
};

// create context
export const GlobalMovieContext = createContext(initialState);

// provider components
export const GlobalMovieProvider = props => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {

    }, [])

    //actions
    const addMovieToFavorites = movie => {
        dispatch({ type: "ADD_MOVIE_TO_FAVORITES", payload: movie })
    }

    return (
        <GlobalMovieContext.Provider value={{ favorites: state.favorites, addMovieToFavorites }}>
            {props.children}
        </GlobalMovieContext.Provider>
    )
}