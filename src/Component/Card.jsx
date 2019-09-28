import React, { useState, useRef } from 'react'
import { useSpring, animated } from 'react-spring';
import { CardModal } from './CardModal';
import '../css/Card.css';

const trans = (x, y, s) => `perspective(200px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;



export function Card(data) 
{
  //Modal
  const[open, setOpen] = React.useState(false);

  let showModal = ()=>{    
    setOpen(!open);
  }

  //Animacion
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 200, friction: 60 } }));
  const ref = useRef();
  const [isHovered, setHovered] = useState(false)
  return (
    
      <animated.div
      class="card"
      ref={ref}
      onClick={showModal}
      onMouseEnter={() => setHovered(true)}
      onMouseMove={({ clientX, clientY }) => {
      const x = clientX - (ref.current.offsetLeft - (window.scrollX || window.pageXOffset || document.body.scrollLeft))
      const y = clientY - (ref.current.offsetTop - (window.scrollY || window.pageYOffset || document.body.scrollTop))
      const dampen = 60 // Higher number => less rotation
      const xys = 
      [ 
        -(y - ref.current.clientHeight / 2) / dampen, // rotateX
        (x - ref.current.clientWidth / 2) / dampen, // rotateY
        1.07, // Scale
      ]
      set({ xys })
      }}
      onMouseLeave={() => 
      {
        setHovered(false)
        set({ xys: [0, 0, 1] })
      }}
      style={{ 
        zIndex: isHovered ? 2 : 1,
        transform: props.xys.interpolate(trans), 
        backgroundImage: "url("+require('../Model/Assets/'+data.imgName)+")"}}
      >
        <CardModal open={open} closeModal={showModal} name={data.name} desc={data.desc} imgName={data.imgName}/>
      </animated.div>
  );
}

export function CardForModal(data) 
{

  //Animacion
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 200, friction: 60 } }));
  const ref = useRef();
  const [isHovered, setHovered] = useState(false)
  return (
    
      <animated.div
      class="card"
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseMove={({ clientX, clientY }) => {
      const x = clientX - (ref.current.offsetLeft - (window.scrollX || window.pageXOffset || document.body.scrollLeft))
      const y = clientY - (ref.current.offsetTop - (window.scrollY || window.pageYOffset || document.body.scrollTop))
      const dampen = 60 // Higher number => less rotation
      const xys = 
      [ 
        -(y - ref.current.clientHeight / 2) / dampen, // rotateX
        (x - ref.current.clientWidth / 2) / dampen, // rotateY
        1.07, // Scale
      ]
      set({ xys })
      }}
      onMouseLeave={() => 
      {
        setHovered(false)
        set({ xys: [0, 0, 1] })
      }}
      style={{ 
        zIndex: isHovered ? 2 : 1,
        transform: props.xys.interpolate(trans), 
        backgroundImage: "url("+require('../Model/Assets/'+data.imgName)+")"}}
      >
      </animated.div>
  );
}

