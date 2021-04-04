import React, { useEffect, useState, useRef } from 'react'
import firebase from '../../services/firebase'
import { Link } from 'react-router-dom'
import Header from '../Header/Header'
import { movieService } from '../../services/movieService'
import FullPageSpinner from '../Spinner/FullPageSpinner'
import Comment from './Comment'

import './Details.css'

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
    const [commentsData, setCommentsData] = useState({});
    const commentRef = useRef();
    const backgroundStyle = {
        background: `url(https://image.tmdb.org/t/p/original${movieDetails.background})`,
        "background-size": "cover",
    }

    async function onCommentHandler(e) {
        e.preventDefault();
        let user = firebase.auth().currentUser;
        let currentDate = new Date().toLocaleString();

       await movieService.addComment(
            currentMovieId, commentRef.current.value, user.uid, currentDate);

        commentRef.current.value = '';

       await movieService.getComments(currentMovieId)
            .then(data => {
                setCommentsData(data);
            })
            .catch(err => {
                setCommentsData({})
            })
    }

    useEffect(() => {
        setLoading(true)

        movieService.getMovieDetailsById(currentMovieId)
            .then(data => {
                setMovieDetails({
                    "title": data.title,
                    "vote_average": data.vote_average,
                    "release_date": data.release_date.substring(0, 4),
                    "duration": timeConvert(data.runtime),
                    "overview": data.overview,
                    "background": data.backdrop_path,
                    "imdb_id": data.imdb_id
                })

                setLoading(false)
                setMovieGenres(data.genres)

            })

        movieService.getComments(currentMovieId)
            .then(data => {
                setCommentsData(data);
            })
            .catch(err => {
                setCommentsData({})
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
                                            {movieDetails.vote_average > 0 ?
                                                <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68A1,1,0,0,0,6.9,21.44L12,18.77l5.1,2.67a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Zm-6.15,4a1,1,0,0,0-.29.88l.72,4.2-3.76-2a1.06,1.06,0,0,0-.94,0l-3.76,2,.72-4.2a1,1,0,0,0-.29-.88l-3-3,4.21-.61a1,1,0,0,0,.76-.55L12,5.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z" /></svg>
                                                    {movieDetails.vote_average}
                                                </li>
                                                : ""
                                            }
                                            <li>{movieDetails.release_date}</li>
                                            <li>{movieDetails.duration}</li>
                                        </ul>

                                        <p>
                                            {movieDetails.overview}
                                        </p>
                                    </div>
                                </div>

                                <div className="col-12 col-xl-8">
                                    <iframe src={`http://databasegdriveplayer.co/player.php?imdb=${movieDetails.imdb_id}`} title="myiFrame" scrolling="no" frameborder="0" marginheight="0px" marginwidth="0px" height="400px" width="700px" allowfullscreen></iframe>
                                </div>

                                <div className="col-12 col-xl-8">
                                    <div className="categories">
                                        <h3 className="categories__title">Genres</h3>
                                        {movieGenres.map(genre =>
                                            <Link to={`/categories/${genre.id}/${genre.name.toLowerCase()}/1`} className="categories__item">
                                                {genre.name}
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-12 col-xl-8">
                                <div class="comments">
                                    <ul class="nav nav-tabs comments__title comments__title--tabs" id="comments__tabs" role="tablist">
                                        <li class="nav-item">
                                            <a class="nav-link" aria-selected="true">
                                                <h4>Comments</h4>
                                                <span>{commentsData !== null && Object.values(commentsData).length > 0 ?
                                                    Object.values(commentsData).length : 0}</span>
                                            </a>
                                        </li>
                                    </ul>
                                    <div class="tab-content">
                                        <div class="tab-pane fade show active" id="tab-1" role="tabpanel">
                                            <ul class="comments__list">
                                                {commentsData !== null && Object.values(commentsData).length > 0 &&
                                                    Object.values(commentsData).map(
                                                        comment => <Comment comment={comment} />)}
                                            </ul>

                                            <form onSubmit={onCommentHandler} class="comments__form">
                                                <div class="sign__group">
                                                    <textarea ref={commentRef} id="text" name="text" class="sign__textarea" placeholder="Add comment"></textarea>
                                                </div>
                                                <button type="submit" class="sign__btn">Send</button>
                                            </form>
                                        </div>
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
