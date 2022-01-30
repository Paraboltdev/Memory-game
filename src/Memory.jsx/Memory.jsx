import React, { useEffect, useState } from 'react';
import {uniqueCardsArray} from '../assets/cards'
import Card from '../Card/Card';
import './memory.css'

const Memory = () => {
    const [score, setScore] = useState(0)
    const [flips, setFlips] = useState(0)
    const [cards,setCards] = useState([])
    const [ firstCard, setFirstCard] = useState({})
    const [ secondCard, setSecondCard] = useState({})
    
    const [unflipedCards, setUnflipedCards]= useState([])
    const [disabledCards, setDisabledCards]= useState([])

    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
  }

    useEffect(()=>{
      shuffleArray(uniqueCardsArray)
      setCards(uniqueCardsArray)
      console.log(cards);
    },[])

    useEffect(()=>{
      checkMatch()
    },[secondCard])

    
    console.log(cards);
    const handleChange = () =>{
        
    }

    const flipCard = (type, index) =>{
      if(firstCard.type===type && firstCard.index === index){
        return 0;
      } 
      if(!firstCard.type){
        setFirstCard({ type,  index})
      }
      else if(!secondCard.type){
        setSecondCard({type,  index})
      }
      return 1
        
      
    }

    const checkMatch = ()=>{
      if(firstCard.type && secondCard.type ){
        const match = firstCard.type ===secondCard.type;
        match ? disableCards(): unflipCards()
        setFlips(flips + 1);
        if(match){
          setScore(score +1)
        }
      }
    }

    const disableCards = ()=>{
      setDisabledCards([firstCard.index , secondCard.index])
      resetCards()
    }
    console.log(disabledCards);

    const unflipCards = ()=>{
      setUnflipedCards([firstCard.index , secondCard.index])
     resetCards()
    }
    const resetCards =()=>{
      setFirstCard({})
      setSecondCard({})
    }
     
    

  return (
  <div className='container'>
  <div className='score'>
      <p onChange={handleChange}>Score: {score}</p>
      <p>Flips: {flips}</p>
  </div>
    <div className='card-table'>
    {cards.map((card, index, )=>(
     <Card 
     card={card}
     key={index} 
     type={card.type} 
     index={index} 
     flipCard={flipCard}
      disabledCards={disabledCards}
      unflipedCards={unflipedCards}
     />

    ))}


    </div>

  </div>
    );
};

export default Memory;
