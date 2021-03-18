import React, { useState, useEffect } from 'react'
import { GetMovieGenres } from '../services/Fetcher'
import CatalogGenreCard from './CatalogGenreCard'
import Header from './Header'

export default function Catalog() {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        GetMovieGenres()
            .then((res) => res.json())
            .then((data) => {
                if (!data.errors) {
                    setGenres(data.genres)
                } else {
                    setGenres([])
                }
            })
    }, [])

    return (
        <div>
            <Header/>
            <section className="section section--head section--head-fixed">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-xl-6">
                            <h1 className="section__title section__title--head">Catalog</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section section--pb0">
                <div className="container">
                    <div className="row row--grid">
                        {genres.length > 0 && genres.map(genre =>
                            (<CatalogGenreCard title={genre.name} id={genre.id}/>))
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}
