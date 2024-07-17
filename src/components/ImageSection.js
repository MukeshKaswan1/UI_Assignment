import React from 'react';
import './ImageSection.css';
import image1 from '../Image/image1.png'
import image2 from '../Image/image2.png'
import image3 from '../Image/image3.png'

const ImageSection = () => {
    return (
        <div className="container">
      <div className="column big-image-column">
      <img src={image1} alt="Image 1" className="image big-image"/>
            </div>
            <div className="column small-images-column">
            <img src={image2} alt="Image 2" className="image small-image"/>
                <img src={image3} alt="Image 3" className="image small-image"/>
            </div>
        </div>
    );
};

export default ImageSection;

