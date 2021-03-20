import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { GetMoviesByGenre } from '../../services/Fetcher'

export default function Category({ title, id }) {
    const [genrePoster, setGenrePoster] = useState("");

    useEffect(() => {
        GetMoviesByGenre(id)
            .then(res => res.json())
            .then(data => {
                const currentPosterPath = data.results[5].poster_path;
                if (!data.errors) {
                    setGenrePoster(currentPosterPath);
                } else {
                    setGenrePoster('')
                }
            })
    }, [id])

    return (
        <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
            <Link className="category" to={`/categories/${title.toLowerCase()}/1`}>
                <div className="category__cover">
                    <img src={`https://image.tmdb.org/t/p/w400/${genrePoster}`} alt={title} />
                </div>
                <h3 className="category__title">{title}</h3>
            </Link>
        </div>
    )
}
