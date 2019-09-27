import * as React from 'react'; 
//import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
//import 'pure-react-carousel/dist/react-carousel.es.css';
import SlideShow from 'react-image-show';

export function Slideshow (){

    const covers = [
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2/to0spRl1CMDvyUbOnbb4fTk3VAd.jpg",
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2/lcq8dVxeeOqHvvgcte707K0KVx5.jpg",
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2/zfE0R94v1E8cuKAerbskfD3VfUt.jpg",
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2/kTQ3J8oTTKofAVLYnds2cHUz9KO.jpg",
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2/ziEuG1essDuWuC5lpWUaw1uXY2O.jpg",
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2/lbGzEyESjANpOeD48aROlc3X7aa.jpg",
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2/fQ40gmFM4p03tXwMxQQKh2cCBW4.jpg",
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2/dPrUPFcgLfNbmDL8V69vcrTyEfb.jpg",
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2/78lPtwv72eTNqFW9COBYI0dWDJa.jpg",
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2/bk8LyaMqUtaQ9hUShuvFznQYQKR.jpg",
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2/y4MBh0EjBlMuOzv9axM4qJlmhzz.jpg"
    ]

    return (
        <SlideShow
        images={covers}
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