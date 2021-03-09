import { faNewspaper, faSearch, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Feed() {
    return (
        <div className="w-100 py-4 px-2 d-flex justify-content-center">
            <div className="px-4 py-3" style={{ width: "20%" }}>
                <div className="card ">
                    <div className="card-header text-center fw-bold">
                        <FontAwesomeIcon icon={faNewspaper} /> <span className="ms-2">News</span>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">An item</li>
                        <li className="list-group-item">A second item</li>
                        <li className="list-group-item">A third item</li>
                        <li className="list-group-item">A third item</li>
                        <li className="list-group-item">A third item</li>
                        <li className="list-group-item">A third item</li>
                    </ul>
                    <div className="card-footer p-3">
                        <a className="btn btn-primary w-100">Visit College Page</a>
                    </div>
                </div>
            </div>
            <div className="flex-grow-1 text-center py-3 px-2">
                <div className="w-100 d-flex flex-column align-items-center">
                    <div className="w-100 d-flex flex-row justify-content-between">
                        <div className="flex-shrink-1 w-75">
                            <input type="text" className="form-control flex-shrink-1" placeholder="Search for posts and people..." />
                        </div>
                        <div className="flex-grow-1 ms-3">
                            <button className="btn btn-primary w-100"><FontAwesomeIcon icon={faSearch} /><span className="ms-2 fw-bold">Search</span></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-4 py-3" style={{ width: "20%" }}>
                <div className="card">
                    <div className="card-header text-center fw-bold">
                        <FontAwesomeIcon icon={faStar} /> <span className="ms-2">Featured Post</span>
                    </div>
                    <img src="https://images.pexels.com/photos/5980866/pexels-photo-5980866.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title fw-bolder">Bitcoin might not be Banned in India!</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
