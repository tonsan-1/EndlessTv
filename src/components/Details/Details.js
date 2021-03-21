import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header'
import { GetMovieDetailsById } from '../../services/Fetcher'
import FullPageSpinner from '../FullPageSpinner'

function timeConvert(n) {
    var num = n;
    var hours = (num / 60);
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return rhours > 0 ? rhours + "h " + rminutes + " min" : rminutes + " min";
}

export default function Details(props) {
    const currentMovieId = props.match.params.id;
    const [movieDetails, setMovieDetails] = useState({});
    const [movieGenres, setMovieGenres] = useState([]);
    const [loading, setLoading] = useState(false);
    const backgroundStyle = {
        background: `url(https://image.tmdb.org/t/p/original${movieDetails.background})`,
        "background-size": "cover",
    }

    useEffect(() => {
        setLoading(true)

        GetMovieDetailsById(currentMovieId)
            .then(res => res.json())
            .then(data => {
                setMovieDetails({
                    "title": data.title,
                    "vote_average": data.vote_average,
                    "genre": data.genres[0].name,
                    "release_date": data.release_date.substring(0, 4),
                    "duration": timeConvert(data.runtime),
                    "overview": data.overview,
                    "background": data.backdrop_path
                })

                setMovieGenres(data.genres)

                setTimeout(() => {
                    setLoading(false)
                }, 400)
            })

    }, [currentMovieId])

    return (
        <div>
            <Header />

            {loading ? <FullPageSpinner /> :


                <section className="section section--head section--head-fixed section--gradient section--details-bg">
                    <div className="section__bg" style={backgroundStyle} />
                    <div className="container">
                        <div className="article">
                            <div className="row">
                                <div className="col-12 col-xl-8">
                                    <a href="http://www.youtube.com/watch?v=0O2aH4XLbto" className="article__trailer">
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 1C16.5228 1 21 5.47716 21 11C21 16.5228 16.5228 21 11 21C5.47716 21 1 16.5228 1 11C1 5.47716 5.47716 1 11 1Z" stroke-linecap="round" stroke-linejoin="round"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M14.0501 11.4669C13.3211 12.2529 11.3371 13.5829 10.3221 14.0099C10.1601 14.0779 9.74711 14.2219 9.65811 14.2239C9.46911 14.2299 9.28711 14.1239 9.19911 13.9539C9.16511 13.8879 9.06511 13.4569 9.03311 13.2649C8.93811 12.6809 8.88911 11.7739 8.89011 10.8619C8.88911 9.90489 8.94211 8.95489 9.04811 8.37689C9.07611 8.22089 9.15811 7.86189 9.18211 7.80389C9.22711 7.69589 9.30911 7.61089 9.40811 7.55789C9.48411 7.51689 9.57111 7.49489 9.65811 7.49789C9.74711 7.49989 10.1091 7.62689 10.2331 7.67589C11.2111 8.05589 13.2801 9.43389 14.0401 10.2439C14.1081 10.3169 14.2951 10.5129 14.3261 10.5529C14.3971 10.6429 14.4321 10.7519 14.4321 10.8619C14.4321 10.9639 14.4011 11.0679 14.3371 11.1549C14.3041 11.1999 14.1131 11.3999 14.0501 11.4669Z" stroke-linecap="round" stroke-linejoin="round"></path></svg>
							Trailer
						</a>

                                    <div className="article__content">
                                        <h1>{movieDetails.title}</h1>

                                        <ul className="list">
                                            <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68A1,1,0,0,0,6.9,21.44L12,18.77l5.1,2.67a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Zm-6.15,4a1,1,0,0,0-.29.88l.72,4.2-3.76-2a1.06,1.06,0,0,0-.94,0l-3.76,2,.72-4.2a1,1,0,0,0-.29-.88l-3-3,4.21-.61a1,1,0,0,0,.76-.55L12,5.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z" /></svg>
                                                {movieDetails.vote_average}
                                            </li>
                                            <li>{movieDetails.genre}</li>
                                            <li>{movieDetails.release_date}</li>
                                            <li>{movieDetails.duration}</li>
                                        </ul>

                                        <p>
                                            {movieDetails.overview}
                                        </p>
                                    </div>
                                </div>

                                <div className="col-12 col-xl-8">
                                    <video controls crossorigin playsinline poster="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg" id="player">
                                        <source src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4" type="video/mp4" size="576" />
                                        <source src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4" type="video/mp4" size="720" />
                                        <source src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4" type="video/mp4" size="1080" />

                                        <track kind="captions" label="English" srclang="en" src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.en.vtt"
                                            default />
                                        <track kind="captions" label="Français" srclang="fr" src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.fr.vtt" />

                                        <a href="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4" download>Download</a>
                                    </video>
                                </div>

                                <div className="col-12 col-xl-8">
                                    <div className="categories">
                                        <h3 className="categories__title">Genres</h3>
                                        {movieGenres.map(genre =>
                                            <Link to={`/categories/${genre.name.toLowerCase()}/1`} className="categories__item">
                                                {genre.name}
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            }
        </div>
    )
}
