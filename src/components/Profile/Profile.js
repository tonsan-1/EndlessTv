import React from 'react'
import Header from '../Header/Header'

import './Profile.css'

export default function Profile() {
    return (
        <div>
            <Header />

            <div className="catalog catalog--page">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="profile">
                                <div className="profile__user">
                                    <div className="profile__avatar">
                                        <img src="img/avatar.svg" alt="" />
                                    </div>
                                    <div className="profile__meta">
                                        <h3>John Doe</h3>
                                        <span>FlixTV ID: 11104</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <div className="sign__wrap">
                                <div className="row">
                                    <div className="col-12 col-lg-6">
                                        <form action="#" className="sign__form sign__form--profile sign__form--first">
                                            <div className="row">
                                                <div className="col-12">
                                                    <h4 className="sign__title">Profile details</h4>
                                                </div>

                                                <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                                    <div className="sign__group">
                                                        <label className="sign__label" for="username">Login</label>
                                                        <input id="username" type="text" name="username" className="sign__input" placeholder="User123" />
                                                    </div>
                                                </div>

                                                <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                                    <div className="sign__group">
                                                        <label className="sign__label" for="email">Email</label>
                                                        <input id="email" type="text" name="email" className="sign__input" placeholder="email@email.com" />
                                                    </div>
                                                </div>

                                                <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                                    <div className="sign__group">
                                                        <label className="sign__label" for="firstname">First name</label>
                                                        <input id="firstname" type="text" name="firstname" className="sign__input" placeholder="John" />
                                                    </div>
                                                </div>

                                                <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                                    <div className="sign__group">
                                                        <label className="sign__label" for="lastname">Last name</label>
                                                        <input id="lastname" type="text" name="lastname" className="sign__input" placeholder="Doe" />
                                                    </div>
                                                </div>

                                                <div className="col-12">
                                                    <button className="sign__btn" type="button">Save</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>

                                    <div className="col-12 col-lg-6">
                                        <form action="#" className="sign__form sign__form--profile">
                                            <div className="row">
                                                <div className="col-12">
                                                    <h4 className="sign__title">Change password</h4>
                                                </div>

                                                <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                                    <div className="sign__group">
                                                        <label className="sign__label" for="oldpass">Old password</label>
                                                        <input id="oldpass" type="password" name="oldpass" className="sign__input" />
                                                    </div>
                                                </div>

                                                <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                                    <div className="sign__group">
                                                        <label className="sign__label" for="newpass">New password</label>
                                                        <input id="newpass" type="password" name="newpass" className="sign__input" />
                                                    </div>
                                                </div>

                                                <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                                    <div className="sign__group">
                                                        <label className="sign__label" for="confirmpass">Confirm new password</label>
                                                        <input id="confirmpass" type="password" name="confirmpass" className="sign__input" />
                                                    </div>
                                                </div>

                                                <div className="col-12">
                                                    <button className="sign__btn" type="button">Change</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
