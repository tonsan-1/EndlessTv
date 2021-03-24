import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { GetMoviesByGenre } from '../../services/Fetcher'

export default function Category({genre}) {
    const [genrePoster, setGenrePoster] = useState("");

    useEffect(() => {
        GetMoviesByGenre(genre.id)
            .then(res => res.json())
            .then(data => {
                const currentPosterPath = data.results[19].poster_path;
                if (!data.errors) {
                    setGenrePoster(currentPosterPath);
                } else {
                    setGenrePoster('')
                }
            })
    }, [genre.id])

    return (
        <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
            <Link className="category" to={`/categories/${genre.id}/${genre.name.toLowerCase()}/1`}>
                <div className="category__cover">
                    <img src={`https://image.tmdb.org/t/p/w500/${genrePoster}`} alt=""/>
                </div>
                <h3 className="category__title">{genre.name}</h3>
            </Link>
        </div>
    )
}
