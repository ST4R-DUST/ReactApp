import * as React from 'react'; 
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export function Carousel (){

    return(
        <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={125}
            totalSlides={5}
        >
            <Slider>
                <Slide index={0}>Primero </Slide>
                <Slide index={1}>Segundo </Slide>
                <Slide index={2}>Tercero </Slide>
                <Slide index={3}>Cuarto </Slide>
                <Slide index={4}>Quinto </Slide>
            </Slider>
            <ButtonBack>Atrás</ButtonBack>
            <ButtonNext>Adelante</ButtonNext>
        </CarouselProvider>
    
        
    );    
}