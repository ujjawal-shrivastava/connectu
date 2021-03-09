import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function FeaturedPost() {
    return (
        <div className="card shadow-sm">
            <div className="card-header text-center fw-bold">
                <FontAwesomeIcon icon={faStar} /> <span className="ms-2">Featured Post</span>
            </div>
            <img src="https://images.pexels.com/photos/5980866/pexels-photo-5980866.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title fw-bolder">Bitcoin might not be Banned in India!</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button className="btn btn-primary">Read More</button>
            </div>
        </div>
    )
}
