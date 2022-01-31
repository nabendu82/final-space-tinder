import React, { useEffect, useState } from 'react';
import './FinalSpaceCards.css';
import TinderCard from 'react-tinder-card'

const FinalSpaceCards = () => {
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        fetch('https://finalspaceapi.com/api/v0/character/')
        .then(res => res.json())
        .then(data => setCharacters(data))
        .catch(err => console.log(err))
    }, [])

    const swiped = (direction, nameToDelete) => {
        console.log("receiving " + nameToDelete)
    }

    const outOfFrame = (name) => {
        console.log(name + " left the screen!!")
    }

    return (
        <div className="finalSpaceCards">
            <div className="finalSpaceCards__container">
                {characters.map((character) => (
                    <TinderCard 
                        className="swipe"
                        key={character.id}
                        preventSwipe={['up', 'down']}
                        onSwipe={(dir) => swiped(dir, character.name)}
                        onCardLeftScreen={() => outOfFrame(character.name)} 
                    >
                        <div style={{ backgroundImage: `url(${character.img_url})`}} className="card">
                            <h3>Name - {character.name}</h3>
                            <h4>Species - {character.species}</h4>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
};

export default FinalSpaceCards;
