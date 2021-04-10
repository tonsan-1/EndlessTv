import { createContext, useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { movieService } from '../services/movieService'

// create context
export const GlobalMovieContext = createContext();

// create provider 
export function GlobalMovieProvider(props) {
    const { currentUser } = useAuth();
    const [state, setState] = useState({ favorites: [] });

    useEffect(() => {
        movieService.getFavoriteMovies(currentUser.uid)
            .then(data => {
                if (data !== null) {
                    setState(data);
                }
            })
    }, [currentUser.uid]);

    useEffect(() => {
        movieService.addToFavorites(currentUser.uid, state.favorites)
    }, [state, currentUser.uid])

    //actions
    const addMovieToFavorites = movie => {
        setState(prevState => {
            return {favorites : [...prevState.favorites, movie]}
        })
    }
    const removeMovieFromFavorites = (id) => {
        setState(prevState => {
            return {favorites : prevState.favorites.filter(movie => movie.id !== id )}
        })
    }

    return (
        <GlobalMovieContext.Provider value={{ favorites: state.favorites, addMovieToFavorites, removeMovieFromFavorites }}>
            {props.children}
        </GlobalMovieContext.Provider>
    )
}