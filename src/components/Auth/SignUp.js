import React, { useRef, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { movieService } from '../../services/movieService'
import SweetAlert from 'react-bootstrap-sweetalert';
import './Sign.css'

const defaultProfilePicture = "https://tryzambia.com/storage/user_profile_photo/default.png";

export default function SignUp() {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signup } = useAuth();
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    function onErrorConfirm(e) {
        setError(false);
    }

    function handleSubmit(e) {
        e.preventDefault()
        setLoading(true);

        if (passwordRef.current.value !==
            passwordConfirmRef.current.value) {
            setLoading(false);

            return setError('Passwords do not match!')
        }

        signup(emailRef.current.value, passwordRef.current.value)
            .then(res => {
                setError(false);
                setSuccess(true);

                res.user.updateProfile({
                    displayName: nameRef.current.value,
                    photoURL: defaultProfilePicture
                });

                movieService.addUserDetails(
                    nameRef.current.value, defaultProfilePicture, res.user.uid)

                setTimeout(() => {
                    history.push('/')
                }, 1600)

                setLoading(false);

            })
            .catch(error => {
                setError(error.message);
            });
            
        setLoading(false);
    }

    return (
        <div className="sign section--full-bg">
            {error && <SweetAlert timeout={1500} onConfirm={() => setError(false)} showConfirm={false} danger title={error} />}
            {success && <SweetAlert timeout={1500} onConfirm={() => setSuccess(false)} showConfirm={false} success title="You signed up successfully!" />}

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="sign__content">
                            <form onSubmit={handleSubmit} className="sign__form">
                                <p className="sign__logo">
                                    EndlessTV
                                </p>
                                <div className="sign__group">
                                    <input type="text" ref={nameRef} required className="sign__input" placeholder="Name" />
                                </div>

                                <div className="sign__group">
                                    <input type="text" ref={emailRef} required className="sign__input" placeholder="Email" />
                                </div>

                                <div className="sign__group">
                                    <input type="password" ref={passwordRef} required className="sign__input" placeholder="Password" />
                                </div>

                                <div className="sign__group">
                                    <input type="password" ref={passwordConfirmRef} required className="sign__input" placeholder="Confirm Password" />
                                </div>

                                <button disabled={loading} className="sign__btn" type="submit">Sign up</button>

                                <span className="sign__text">Already have an account? <Link to="/signin">Sign in!</Link></span>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
