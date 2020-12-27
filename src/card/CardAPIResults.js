// Imports
import React, {useState} from 'react';

// Style Imports
import './Card.css';

function CardAPIResults({ isNominatedCallback, addNominationCallback, movie }) {

    // Hook for representing a movie card that is nominated and updating app state of said nominated movie if need be.
    const [nominated, setNominatedState] = useState(isNominatedCallback(movie));
    const addNomination = (movie) => {
        var result = addNominationCallback(movie);
        setNominatedState(result);
    }

    return (
        <div className="Card-container" key={movie.imdbID}>
            <img src={movie.Poster === 'N/A' ? 'https://placehold.it/198x264&text=Image+Not+Found' : movie.Poster} 
                alt={movie.Title}/>
            <div className="Card-content">
                <h2>{movie.Title}</h2>
                <p>{movie.Year}</p>
                <button 
                    className="Button-green"
                    onClick={() => {addNomination(movie)}}
                    disabled={nominated}>Nominate</button>
            </div>
        </div>
    )
}

export default CardAPIResults;