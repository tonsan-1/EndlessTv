import React, { useEffect, useState, useRef } from 'react'
import firebase from '../../services/firebase'
import { Link } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
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
                                    <iframe src={`https://databasegdriveplayer.co/player.php?imdb=${movieDetails.imdb_id}`} title="myiFrame" scrolling="no" frameborder="0" height="400px" width="700px" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
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
            <Footer />
        </div>
    )
}
