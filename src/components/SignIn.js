import React from 'react'
import { Link } from 'react-router-dom'

export default function SignIn() {
    return (
        <div className="sign section--full-bg">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="sign__content">
                            <form action="#" className="sign__form">
                                <a href="index.html" className="sign__logo">
                                    EndlessTV
                                </a>

                                <div className="sign__group">
                                    <input type="text" className="sign__input" placeholder="Email" />
                                </div>

                                <div className="sign__group">
                                    <input type="password" className="sign__input" placeholder="Password" />
                                </div>

                                <div className="sign__group">
                                    <input type="password" className="sign__input" placeholder="Confirm Password" />
                                </div>

                                <button className="sign__btn" type="button">Sign in</button>

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
