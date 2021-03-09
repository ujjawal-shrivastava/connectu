import { faChevronDown,faGlobeAmericas, faGrinSquintTears, faHeart, faShareAlt, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Post() {
    return (
        <div className="card w-100 shadow-sm my-3 py-4 px-4">
            <div className="d-flex justify-content-between align-items-start mb-3">
                <div className="d-flex align-items-center">
                    <div className="me-1">
                        <img className="" src={`https://ui-avatars.com/api/?name=${encodeURI("Ujjawal Shrivastava")}&rounded=true&background=random`} alt="" srcset="" width={50} />
                    </div>
                    <div className="d-flex flex-column ms-1">
                        <div><p className="text-start m-0 fw-bolder">Ujjawal Shrivastava</p></div>
                        <div><p className="text-start m-0 fw-thin text-muted">B.Sc.(Hons.) Computer Science (II)</p></div>
                    </div>
                </div>
                <div>
                    <p className="m-0 text-muted fs-4"><FontAwesomeIcon icon={faGlobeAmericas}/></p>
                </div>
            </div>
            <div className="my-2">
                <p className="m-0 text-start">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget metus in mi malesuada dictum sed id ex. Nam condimentum lacinia tellus vitae eleifend. Integer ullamcorper odio lacinia, venenatis quam sed, sodales lacus. Cras id odio sodales, tincidunt lectus et, tempus dolor. Pellentesque tempus, ligula et scelerisque dictum, purus felis fringilla magna, nec gravida metus quam eget nibh. Phasellus aliquet ante sed lectus varius, a suscipit nisi lacinia. Morbi ligula justo, interdum sed erat ac, pretium condimentum ante. Nullam nec lacus erat. Mauris vitae ipsum ut metus iaculis eleifend. Praesent ultrices velit nec ipsum laoreet vehicula. Ut pretium feugiat enim, ac tincidunt dolor tincidunt ut.
                </p>
            </div>
            <div className="d-flex justify-content-between align-items-center">
                <div className="mt-3 d-flex flex-row justify-content-between align-items-center" style={{ width: "30%" }}>
                    <div className="d-flex flex-column align-items-center justify-content-center fs-5" style={{color:"#ee5253"}}>
                        <FontAwesomeIcon icon={faHeart} />
                        <p className="m-0 mt-1 fs-6">345</p>
                    </div>
                    <div className="d-flex flex-column align-items-center justify-content-center fs-5" style={{color:"#10ac84"}}>
                        <FontAwesomeIcon icon={faGrinSquintTears} />
                        <p className="m-0 mt-1 fs-6">45</p>
                    </div>
                    <div className="d-flex flex-column align-items-center justify-content-center fs-5" style={{color:"#ff9f43"}}>
                        <FontAwesomeIcon icon={faStar} />
                        <p className="m-0 mt-1 fs-6">Save</p>
                    </div>
                    <div className="d-flex flex-column align-items-center justify-content-center fs-5" style={{color:"#341f97"}}>
                        <FontAwesomeIcon icon={faShareAlt} />
                        <p className="m-0 mt-1 fs-6">Share</p>
                    </div>
                </div>
                <div className="">
                    <button className="btn btn-outline-dark"><span className="me-2">Comments</span><FontAwesomeIcon icon={faChevronDown} /></button>
                </div>
            </div>
        </div>
    )
}
