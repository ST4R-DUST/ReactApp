import * as React from 'react'; 
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export function Slideshow (){

    return(
        <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={125}
            totalSlides={5}
        >
            <Slider>
                <Slide index={0}>
                    <img src="https://png.pngtree.com/png-vector/20190116/ourlarge/pngtree-cartoon-hand-drawn-dalmatian-puppy-pet-dog-png-image_382100.jpg"
                        width={200}
                        height={250}
                    />
                </Slide>
                <Slide index={1}>
                    <img src="https://images.vexels.com/media/users/3/155867/isolated/lists/e3adbc34b91a7e4cd8b4cef9a93fc23c-dinosaur-t-rex-vector.png"/>
                </Slide>
                <Slide index={2}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaCGTgxtS6QcHodLexfhEJaL19j2_-FyHRJpIMiocexVqCypIS"/>    
                </Slide>
                <Slide index={3}>
                    <img src="https://petcube.com/images/pages/mobile-app/feature-instagram.svg"/>    
                </Slide>
                <Slide index={4}>
                    <img src="https://images.freeimages.com/images/premium/small-comps/1322/13220712-colorful-party-cupcakes.jpg"/>
                </Slide>
            </Slider>
            <ButtonBack>Atrás</ButtonBack>
            <ButtonNext>Adelante</ButtonNext>
        </CarouselProvider>
    
        
    );    
}

export default Slideshow;