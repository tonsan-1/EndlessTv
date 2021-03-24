import React, { useState, useEffect } from 'react'
import { movieService } from '../../services/movieService'
import Header from '../Header/Header'
import HomeMovieCard from '../Home/HomeMovieCard'
import FullPageSpinner from '../Spinner/FullPageSpinner'
import OwlCarousel from 'react-owl-carousel2';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Home.css'

const options = {
    items: 5,
    margin: 15,
    slideBy: 3,
    lazyLoad: true,
    rewind: true
}

export default function Home() {
    const [popular, setPopular] = useState([]);
    const [topMovies, setTopMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        setLoading(true)

        movieService.getPopularMovies()
            .then(data => {
                setPopular(data.results)
            })

        movieService.getTopClassicsMoviesOfAllTime()
            .then(data => {
                setTopMovies(data.results)
                setLoading(false)
            })
    }, [])

    return (
        <div>
            <Header />

            {loading ? <FullPageSpinner /> :

                <div>
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
            }
        </div>
    )
}
