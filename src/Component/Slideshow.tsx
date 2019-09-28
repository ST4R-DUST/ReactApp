import * as React from 'react'; 

import SlideShow from 'react-image-show';
import Covers from '../Model/data';

export function Slideshow (){


    return (
        <SlideShow
        images={Covers}
        width="780px"
        imagesWidth="700px"
        imagesHeight="450px"
        imagesHeightMobile="56vw"
        thumbnailsWidth="250px"
        thumbnailsHeight="150px"
        infinite = {true}
        fixedImagesHeight
        thumbnails 
      />
    );
}
export default Slideshow;