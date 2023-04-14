import React, { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";

const PhotoGallery = () => {
    const [index, setIndex] = useState(-1);
    const PROJECT_IMAGES = [
        "assets/img/projects/project-9.jpg",
        "assets/img/projects/project-10.jpg",
        "assets/img/projects/project-11.jpg",
        "assets/img/projects/project-12.jpg",
        "assets/img/projects/project-10.jpg",
        "assets/img/projects/project-11.jpg"
    ];
    const slides = PROJECT_IMAGES.map((img, i) => ({
        src: img,
        key: i,
    }));
    return (
        <div>
            <div className="row row-5">
                {PROJECT_IMAGES.map((image, idx) => (
                    <div className="col-xl-3 col-lg-4 col-sm-6 col-12 section-space--top--10" key={idx}>
                        <button className="gallery-item single-gallery-thumb" onClick={() => setIndex(idx)}>
                            <img src={image} className="img-fluid" alt="" /><span className="plus" />
                        </button>
                    </div>
                ))}
                <Lightbox
                    open={index >= 0}
                    index={index}
                    close={() => setIndex(-1)}
                    slides={slides}
                    plugins={[Thumbnails, Zoom, Fullscreen]}
                />
            </div>
        </div>
    );
}

export default PhotoGallery;