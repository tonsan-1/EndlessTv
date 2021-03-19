import React, { useState, useEffect } from 'react'
import { GetPopularMovies, GetTopMoviesOfAllTime } from '../services/Fetcher'
import Header from './Header'
import HomeMovieCard from './HomeMovieCard'

import OwlCarousel from 'react-owl-carousel2';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function Home() {
    const [popular, setPopular] = useState([]);
    const [topMovies, setTopMovies] = useState([]);

    const options = {
        items: 5,
        margin: 15,
        slideBy: 3,
        lazyLoad: true,
        rewind: true
    }

    useEffect(() => {
        GetPopularMovies().then(res => res.json())
            .then(data => {
                if (!data.errors) { setPopular(data.results) } else { setPopular([]) }
            })

        GetTopMoviesOfAllTime().then(res => res.json())
            .then(data => {
                if (!data.errors) { setTopMovies(data.results) } else { setTopMovies([]) }
            })
    }, [])

    return (
        <div>
            <Header />
            <section class="section">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <h2 class="section__title">Popular Movies</h2>
                        </div>
                        <div class="col-12">
                            <div class="section__carousel-wrap">
                                <OwlCarousel options={options}>
                                    {popular.length > 0 ? popular.map(movie => <HomeMovieCard movie={movie} key={movie.id} />) : ""}
                                </OwlCarousel>
                            </div>
                        </div>

                        <div class="col-12">
                            <h2 class="section__title">All Time Classics</h2>
                        </div>
                        <div class="col-12">
                            <div class="section__carousel-wrap">
                                <OwlCarousel options={options}>
                                    {topMovies.length > 0 ? topMovies.map(movie => <HomeMovieCard movie={movie} key={movie.id} />) : ""}
                                </OwlCarousel>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
