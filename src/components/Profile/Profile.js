import React, {useState, useRef} from 'react'
import Header from '../Header/Header'
import firebase, { storage } from '../../services/firebase'

import './Profile.css'

export default function Profile() {
    let user = firebase.auth().currentUser;
    const [imageUrl, setImageUrl] = useState(user.photoURL);
    const [email, setEmail] = useState(user.email);
    const [name, setName] = useState(user.displayName);
    const [error, setError] = useState('');
    const imageRef = useRef();
    const emailRef = useRef();
    const nameRef = useRef();


    function handleSaveDetails(e) {
        e.preventDefault();

        if (imageRef.current.files.length > 0) {
            const uploadTask = storage.ref(`images/${imageRef.current.files[0].name}`).put(imageRef.current.files[0]);

            uploadTask.on(
                "state_changed",
                snapshot => {},
                error => {
                    setError(error.message)
                },
                () => {
                    storage
                        .ref("images")
                        .child(imageRef.current.files[0].name)
                        .getDownloadURL()
                        .then(url => {
                            user.updateProfile({
                                photoURL : url
                            })

                            setImageUrl(url);
                        })
                        .catch(err => {
                            setError(err.message)
                        })
                }
            )
        }
        if (emailRef.current.value.length > 0) {
            console.log('vliza');
        }
    }

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
                                        <img src={imageUrl} alt="" />
                                    </div>
                                    <div className="profile__meta">
                                        <h3>{name}</h3>
                                        <span>{email}</span>
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
                                        <form onSubmit={handleSaveDetails} className="sign__form sign__form--profile sign__form--first">
                                            <div className="row">
                                                <div className="col-12">
                                                    <h4 className="sign__title">Profile details</h4>
                                                </div>

                                                <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                                    <div className="sign__group">
                                                        <label className="sign__label" for="email">New email</label>
                                                        <input ref={emailRef} type="text" name="email" className="sign__input"/>
                                                    </div>
                                                </div>

                                                <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                                    <label className="sign__label" for="picture">Profile Picture</label>
                                                    <input ref={imageRef} type="file" name="picture" />
                                                </div>

                                                <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                                    <div className="sign__group">
                                                        <label className="sign__label" for="firstname">New name</label>
                                                        <input ref={nameRef} type="text" name="name" className="sign__input"/>
                                                    </div>
                                                </div>

                                                <div className="col-12">
                                                    <button className="sign__btn" type="submit">Save</button>
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
