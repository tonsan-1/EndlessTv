import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { movieService } from '../../services/movieService'
import CategoryMovieCard from './CategoryMovieCard'
import Header from '../Header/Header'
import FullPageSpinner from '../Spinner/FullPageSpinner'


import RangeSlider from 'react-bootstrap-range-slider';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';

import './Category.css'

export default function Category(props) {
    const currentPage = parseInt(props.match.params.currentPage);
    const genreId = props.match.params.genreId;
    const genreName = props.match.params.genreName;
    const [currentMovies, setCurrentMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [averageVote, setAverageVote] = useState(4);
    const [releaseYear, setReleaseYear] = useState(0);


    function onAverageVoteHandler(e) {
        e.preventDefault();

        setAverageVote(e.target.value)
    }

    function onReleaseYearHandler(e) {
        e.preventDefault();

        setReleaseYear(e.target.value)
    }

    useEffect(() => {
        setLoading(true)

        movieService.getMoviesByGenreCurrentPageAverageVoteReleaseYear(genreId, currentPage, averageVote, releaseYear)
            .then(data => {
                setCurrentMovies(
                    data.results.filter(x =>
                        x.release_date && x.backdrop_path && x.poster_path))

                setTimeout(() => {
                    setLoading(false)
                }, 200)
            })
    }, [genreId, currentPage, averageVote, releaseYear])

    return (
        <div>
            <Header />
            <div>
                <div className="category">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="category__nav">
                                    <div className="category__filter_wrap">
                                        <span className="category__filter_title">Average Vote</span>
                                        <RangeSlider
                                            tooltipPlacement={'top'}
                                            size={'sm'}
                                            min={1}
                                            max={8}
                                            value={averageVote}
                                            onChange={onAverageVoteHandler}
                                        />
                                    </div>
                                    <div className="category__filter_wrap">
                                        <span className="category__filter_title">Release Year</span>
                                        <RangeSlider
                                            tooltipPlacement={'top'}
                                            size={'sm'}
                                            max={2021}
                                            min={1980}
                                            value={releaseYear}
                                            onChange={onReleaseYearHandler}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {loading ? <FullPageSpinner /> :

                            <div className="row">
                                <div className="col-12">
                                    <div class="row row--grid">
                                        {currentMovies.length > 0 && currentMovies.map(movie =>
                                            <div class="col-12 col-sm-6 col-lg-4 col-xl-3">
                                                <CategoryMovieCard movie={movie} key={movie.id} />
                                            </div>)}
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="catalog__paginator-wrap">
                                                <span className="catalog__pages">{currentPage} page from 500</span>

                                                <ul className="catalog__paginator">
                                                    <li>
                                                        <Link to={`/categories/${genreId}/${genreName}/${currentPage > 1 ? currentPage - 1 : currentPage}`}>
                                                            <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.75 5.36475L13.1992 5.36475" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" /><path d="M5.771 10.1271L0.749878 5.36496L5.771 0.602051" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" /></svg>
                                                        </Link>
                                                    </li>

                                                    <li>
                                                        <Link to={`/categories/${genreId}/${genreName}/${currentPage + 1}`}>
                                                            <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.1992 5.3645L0.75 5.3645" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" /><path d="M8.17822 0.602051L13.1993 5.36417L8.17822 10.1271" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" /></svg>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>


        </div>
    )
}
