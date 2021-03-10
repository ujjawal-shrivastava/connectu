import React, { useState } from 'react'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
//photos 
import img1 from '../../assets/images/gallery/img1.jpeg'
import img2 from '../../assets/images/gallery/img2.jpeg'
import img3 from '../../assets/images/gallery/img3.jpeg'
import img4 from '../../assets/images/gallery/img4.jpg'
import img5 from '../../assets/images/gallery/img5.png'
import img6 from '../../assets/images/gallery/img6.jpeg'
import img7 from '../../assets/images/gallery/img7.jpg'
import img8 from '../../assets/images/gallery/img8.png'
import img9 from '../../assets/images/gallery/img9.jpg'
import img10 from '../../assets/images/gallery/img10.jpg'
import img11 from '../../assets/images/gallery/img11.jpeg'
import img12 from '../../assets/images/gallery/img12.jpg'
//---
export default function Gallery() {
    const [open, setOpen] = useState(false)
    const [current, setCurrent] = useState(0)

    const photos = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12]
    return (
        <div className="m-0 w-100 justify-content-center p-4 overflow-hidden">
            <div className="row w-100 m-0 row-cols-5 justify-content-center">
                {photos.map((value, index) => {
                    return (
                        <div
                            className="col m-4 shadow cursor-zoom-in"
                            key={index}
                            style={{
                                paddingTop: "20%",
                                backgroundImage: `url(${value})`,
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat"
                            }}
                            onClick={()=>{
                                setCurrent(index)
                                setOpen(true)
                            }}
                            >

                        </div>
                    )
                })}
            </div>
            {open && (
                <Lightbox
                    mainSrc={photos[current]}
                    nextSrc={photos[(current + 1) % photos.length]}
                    prevSrc={photos[(current + photos.length - 1) % photos.length]}
                    onCloseRequest={() => setOpen(false)}
                    onMovePrevRequest={() =>
                        setCurrent((current + photos.length - 1) % photos.length)
                    }
                    onMoveNextRequest={() =>
                        setCurrent((current + 1) % photos.length)
                    }
                />
            )}
        </div>
    )
}
