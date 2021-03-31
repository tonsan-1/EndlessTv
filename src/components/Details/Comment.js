import React from 'react'

export default function Comment({ comment }) {
    return (
        <li class="comments__item">
            <div class="comments__autor">
                <img class="comments__avatar" src={comment.photoURL} alt="" />
                <span class="comments__name">{comment.displayName}</span>
                <span class="comments__time">{comment.currentDate}</span>
            </div>
            <p class="comments__text">{comment.comment}</p>
        </li>
    )
}
