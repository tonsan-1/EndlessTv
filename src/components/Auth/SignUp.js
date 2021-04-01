import React, { useRef, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../../services/Auth'
import SweetAlert from 'react-bootstrap-sweetalert';
import './Sign.css'

export default function SignUp() {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signup } = useAuth();
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();


    function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !==
            passwordConfirmRef.current.value) {
            return setError('Passwords do not match!')
        }

        signup(emailRef.current.value, passwordRef.current.value)
            .then(res => {
                setError('');
                setLoading(true);
                setSuccess(true);

                res.user.updateProfile({
                    displayName: nameRef.current.value,
                    photoURL: "https://tryzambia.com/storage/user_profile_photo/default.png"
                });

                setTimeout(() => {
                    history.push('/')
                }, 1600)

            })
            .catch(error => {
                setError(error.message);

                setTimeout(() => {
                    setError('');
                }, 2000)
            });

        setLoading(false);
    }

    return (
        <div className="sign section--full-bg">
            {error && <SweetAlert showConfirm={false} danger title={error}/>}
            {success && <SweetAlert showConfirm={false} success title="You signed up successfully!"/>}

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="sign__content">
                            <form onSubmit={handleSubmit} className="sign__form">
                                <a href="index.html" className="sign__logo">
                                    EndlessTV
                                </a>
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
