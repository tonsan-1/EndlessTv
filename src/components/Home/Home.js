import React, { useState, useEffect } from 'react'
import { movieService } from '../../services/movieService'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import HomeMovieCard from '../Home/HomeMovieCard'
import FullPageSpinner from '../Spinner/FullPageSpinner'
import OwlCarousel from 'react-owl-carousel2';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Home.css'


// Carousel options
const options = {
    items: 5,
    margin: 15,
    slideBy: 3,
    lazyLoad: true,
    rewind: true
}

export default function Home() {
    //states for populars, classics and loading
    const [popular, setPopular] = useState([]);
    const [classicMovies, setClassicMovies] = useState([]);
    const [loading, setLoading] = useState(false);


    //fetch functions to get the movies
    useEffect(() => {
        setLoading(true)

        movieService.getPopularMovies()
            .then(data => {
                if (data !== null) {
                    setPopular(data.results)
                }
            });

        movieService.getTopClassicsMoviesOfAllTime()
            .then(data => {
                if (data !== null) {
                    setClassicMovies(data.results)
                    setLoading(false)
                }
            });
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
                                            {classicMovies.length > 0 ? classicMovies.map(movie => <HomeMovieCard movie={movie} key={movie.id} />) : ""}
                                        </OwlCarousel>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            }
            <Footer />
        </div>
    )
}
