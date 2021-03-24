import React, { useState, useEffect } from 'react'
import { GetMovieGenres } from '../../services/movieService'
import CatalogGenreCard from '../Catalog/CatalogGenreCard'
import Header from '../Header/Header'
import FullPageSpinner from '../Spinner/FullPageSpinner'

import './Catalog.css'


export default function Catalog() {
    const [genres, setGenres] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)

        GetMovieGenres()
            .then((res) => res.json())
            .then((data) => {
                console.log(data.genres);
                setGenres(data.genres)

                setTimeout(() => {
                    setLoading(false)
                }, 600)
            })
    }, [])

    return (
        <div>
            <Header />

            {loading ? <FullPageSpinner /> :
                <div>
                    <section className="section section--pb0">
                        <div className="container">
                            <div className="row row--grid">
                                {genres.length > 0 && genres.map(genre =>
                                    (<CatalogGenreCard genre={genre} key={genre.id} />))
                                }
                            </div>
                        </div>
                    </section>
                </div>}
        </div>
    )
}
