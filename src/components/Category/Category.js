import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { GetMovieGenres, GetMoviesByGenreAndCurrentPage } from '../../services/Fetcher'
import CategoryMovieCard from './CategoryMovieCard'
import Header from '../Header'


export default function Category(props) {
    const currentGenreName = props.match.params.title.charAt(0).toUpperCase() + props.match.params.title.slice(1);
    const genre = currentGenreName === 'Science fiction' ? 'Science Fiction' : currentGenreName;
    const [currentGenreId, setCurrentGenreId] = useState("");
    const [currentMovies, setCurrentMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        GetMovieGenres()
            .then((res) => res.json())
            .then((data) => {
                if (!data.errors) {
                    setCurrentGenreId(data.genres.find(x => x.name === genre).id)
                } else {
                    setCurrentGenreId([])
                }
            })
    }, [genre, currentGenreId])

    useEffect(() => {
        setCurrentPage(parseInt(props.match.params.currentPage))
    }, [props.match.params.currentPage])

    useEffect(() => {
        GetMoviesByGenreAndCurrentPage(currentGenreId, currentPage).then(res => res.json())
            .then(data => {
                if (!data.errors) {
                    setCurrentMovies(data.results)
                } else {
                    setCurrentMovies([])
                }
            })
    }, [currentGenreId, currentPage])

    return (
        <div>
            <Header />
            <section className="section section--head">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-xl-6">
                            <h1 className="section__title section__title--head">{genre + ' Movies'}</h1>
                        </div>
                    </div>
                </div>
            </section>



            <div className="catalog catalog--page">
                <div className="container">

                    <div className="row">
                        <div className="col-12">
                            <div className="catalog__paginator-wrap">
                                <span className="catalog__pages">{currentPage} page from 500</span>

                                <ul className="catalog__paginator">
                                    <li>
                                        <Link to={`/categories/${currentGenreName.toLowerCase()}/${currentPage > 1 ? currentPage - 1 : currentPage}`}>
                                            <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.75 5.36475L13.1992 5.36475" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" /><path d="M5.771 10.1271L0.749878 5.36496L5.771 0.602051" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" /></svg>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to={`/categories/${currentGenreName.toLowerCase()}/${currentPage + 1}`}>
                                            <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.1992 5.3645L0.75 5.3645" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" /><path d="M8.17822 0.602051L13.1993 5.36417L8.17822 10.1271" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" /></svg>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

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
                                                <Link to={`/categories/${currentGenreName.toLowerCase()}/${currentPage > 1 ? currentPage - 1 : currentPage}`}>
                                                    <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.75 5.36475L13.1992 5.36475" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" /><path d="M5.771 10.1271L0.749878 5.36496L5.771 0.602051" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" /></svg>
                                                </Link>
                                            </li>

                                            <li>
                                                <Link to={`/categories/${currentGenreName.toLowerCase()}/${currentPage + 1}`}>
                                                    <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.1992 5.3645L0.75 5.3645" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" /><path d="M8.17822 0.602051L13.1993 5.36417L8.17822 10.1271" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" /></svg>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}