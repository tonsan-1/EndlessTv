import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import { movieService } from '../../services/movieService'
import CategoryMovieCard from '../Category/CategoryMovieCard'

export default function Search(props) {
    const searchInput = props.match.params.searchInput;

    const [currentMovies, setCurrentMovies] = useState([]);
    const [loading, setLoading] = useState();

    useEffect(() => {
        setLoading(true)

        movieService.getMoviesBySearchInput(searchInput)
            .then(data => {
                setCurrentMovies(data.results.filter(x => 
                    x.release_date &&
                    x.backdrop_path &&
                    x.poster_path));

                setLoading(false);
            })
    }, [searchInput])

    return (
        <div>
            <Header />
            <div className="catalog catalog--page">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div class="row row--grid">
                                {currentMovies.length > 0 && currentMovies.map(movie =>
                                    <div class="col-12 col-sm-6 col-lg-4 col-xl-3">
                                        <CategoryMovieCard movie={movie} key={movie.id} />
                                    </div>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

