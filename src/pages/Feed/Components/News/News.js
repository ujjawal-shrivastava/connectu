import React from 'react'
import { faNewspaper} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function News() {
    return (
        <div className="card shadow-sm">
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
                <button className="btn btn-primary w-100">Visit College Page</button>
            </div>
        </div>
    )
}
