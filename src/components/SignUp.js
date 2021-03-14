import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {

    const onChange = e => {
        e.preventDefault();

        return "checked"
    }
    return (
        <div className="sign section--full-bg" data-bg="img/bg.jpg">
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
                                    <input type="text" className="sign__input" placeholder="Name" />
                                </div>

                                <div className="sign__group sign__group--checkbox">
                                    <input id="remember" name="remember" type="checkbox" checked="false" onChange={onChange}/>
                                    <label for="remember">I agree to the <Link to="/privacy">Privacy Policy</Link></label>
                                </div>

                                <button className="sign__btn" type="button">Sign up</button>

                                <span className="sign__text">Already have an account? <Link to="/signin">Sign in!</Link></span>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
