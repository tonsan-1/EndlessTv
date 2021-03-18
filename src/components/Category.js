import React, { useState, useEffect } from 'react'
import {GetMoviesByGenre} from '../services/Fetcher'
import DummyImageCategory from '../img/category/1.jpg'

export default function Category({ title, id }) {
    const [genrePoster, setGenrePoster] = useState();

    useEffect(() => {
       
    },[id])

    return (
        <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
            <a href="category.html" className="category">
                <div className="category__cover">
                    <img src={DummyImageCategory} alt="" />
                </div>
                <h3 className="category__title">{title}</h3>
            </a>
        </div>
    )
}
