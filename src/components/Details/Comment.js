import React, { useState, useEffect } from 'react'
import { movieService } from '../../services/movieService'

export default function Comment({ comment }) {
    const [userPhotoURL, setUserPhotoURL] = useState('');
    const [userDisplayName, setUserDisplayName] = useState('');


    useEffect(() => {
        movieService.getUserDetails(comment.userUid)
            .then(res => {
                const data = Object.values(res);

                console.log(data);
                
                setUserPhotoURL(data[0].photoURL);
                setUserDisplayName(data[0].displayName);
            })
    }, [comment.userUid])


    return (
        <li class="comments__item">
            <div class="comments__autor">
                <img class="comments__avatar" src={userPhotoURL} alt="" />
                <span class="comments__name">{userDisplayName}</span>
                <span class="comments__time">{comment.currentDate}</span>
            </div>
            <p class="comments__text">{comment.comment}</p>
        </li>
    )
}
