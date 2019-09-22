import * as React from 'react'; 
//import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
//import 'pure-react-carousel/dist/react-carousel.es.css';
import SlideShow from 'react-image-show';

export function Slideshow (){

    return (
        <SlideShow
        images={["http://www.clker.com/cliparts/8/d/b/1/13683079981493157586trash-empty-icon-1.png",
                "https://icon-library.net/images/cute-icon-png/cute-icon-png-9.jpg",
                "https://myrealdomain.com/images/cute-instagram-icon-7.vnd",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0AwzWxVNuJJawKlyhNo6x6Q-u4O0fhYOi97Kw7F8YDunZ_ZIc"
            ]}
        width="920px"
        imagesWidth="800px"
        imagesHeight="450px"
        imagesHeightMobile="56vw"
        thumbnailsWidth="920px"
        thumbnailsHeight="12vw"
        indicators fixedImagesHeight
      />
    );
}
export default Slideshow;