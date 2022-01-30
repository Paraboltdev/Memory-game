import React, { useEffect, useState } from 'react';
import backface from '../assets/images/back-img.jpg'

import ReactCardFlip from 'react-card-flip';
import './card.css'



const Card = ({card,type, index,flipCard,disabledCards, unflipedCards}) => {
    const[isflipped, setIsflipped]=useState(false)
    const [hasEvent, setHasEvent]= useState(true)
    
    useEffect(()=>{
      if(unflipedCards.includes(index)){
        setTimeout(() => setIsflipped(false), 700);
      }

    },[unflipedCards])

    useEffect(()=>{
      if(disabledCards.includes(index)){
        setHasEvent(false)
      }
    },[disabledCards])

    const handleClick =(e)=>{
        e.preventDefault()
        const value = flipCard(type, index)
        if(value !==0){
          setIsflipped(!isflipped)

        }

        
    }
  return (
    <div className='card'>
     <ReactCardFlip isFlipped={isflipped} flipDirection="horizontal">
        <img src={backface} alt='backFace' className='img' onClick={hasEvent ? handleClick :null} />
        <img src={card.image} alt='frontpic' className='img' onClick={hasEvent ? handleClick :null} />
     </ReactCardFlip>
  </div>
    );
};

export default Card;
