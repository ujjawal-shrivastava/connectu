import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function SearchBar() {
    return (
        <div className="w-100 d-flex flex-row justify-content-between">
            <div className="flex-shrink-1 w-75 shadow-sm">
                <input type="text" className="form-control flex-shrink-1" placeholder="Search for posts and people..." />
            </div>
            <div className="flex-grow-1 ms-3 shadow-sm">
                <button className="btn btn-primary w-100"><FontAwesomeIcon icon={faSearch} /><span className="ms-2 fw-bold">Search</span></button>
            </div>
        </div>
    )
}
