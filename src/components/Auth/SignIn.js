import React, { useRef, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../../services/Auth'
import { Alert } from 'react-bootstrap'

export default function SignUp() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();


    function handleSubmit(e) {
        e.preventDefault()

        login(emailRef.current.value, passwordRef.current.value)
            .then(res => {
                setError('');
                setLoading(true);
                history.push('/');
            })
            .catch(error => {
                setError(error.message);
            });

        setLoading(false);
    }
    return (
        <div className="sign section--full-bg">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="sign__content">
                            <form onSubmit={handleSubmit} className="sign__form">
                                <a href="index.html" className="sign__logo">EndlessTV</a>
                                {error && <Alert variant="danger">{error}</Alert>}
                                <div className="sign__group">
                                    <input type="text" ref={emailRef} required className="sign__input" placeholder="Email" />
                                </div>
                                <div className="sign__group">
                                    <input type="password" ref={passwordRef} required className="sign__input" placeholder="Password" />
                                </div>
                                <button disabled={loading} className="sign__btn" type="submit">Sign in</button>
                                <span className="sign__text">Don't have an account? <Link to="/signup">Sign up!</Link></span>
                                <span className="sign__text"><a href="forgot.html">Forgot password?</a></span>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
