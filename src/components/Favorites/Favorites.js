import React, { useContext } from 'react'
import { GlobalMovieContext } from '../../context/GlobalMovieState'
import FavoritesMovieCard from './FavovitesMovieCard'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

import './Favorites.css'

export default function Favorites() {
    const { favorites } = useContext(GlobalMovieContext);

    return (
        <div>
            <Header />
            <div className="container margin-top">
                <div className="row row--grid">
                    {favorites.length > 0 ? favorites.map(movie => <FavoritesMovieCard movie={movie} key={movie.id} />) :
                    <h1 className="emtpy-fav-list"> You currently don't have any favorite movies. Add some!</h1> }
                </div>
            </div>
            <Footer/>
        </div>
    )
}
