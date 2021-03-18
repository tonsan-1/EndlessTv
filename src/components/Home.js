import React, { useState, useEffect } from 'react'
import { GetPopularMovies } from '../services/Fetcher'
import Header from './Header'
import HomeMovieCard from './HomeMovieCard'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function Home() {
    const [popular, setPopular] = useState([]);

    useEffect(() => {
        GetPopularMovies()
            .then(res => res.json())
            .then(data => {
                if (!data.errors) {
                    setPopular(data.results)
                } else {
                    setPopular([])
                }
            })
    }, [])

    return (
        <div>
            <Header />
            <section class="section">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <h2 class="section__title">Popular</h2>
                        </div>
                        <div class="col-12">
                                <OwlCarousel margin={15} items={6} >
                                    {popular.length > 0 && popular.map(movie => <HomeMovieCard movie={movie}/>)
                                    }
                                </OwlCarousel>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
