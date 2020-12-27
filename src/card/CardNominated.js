// Imports
import React from 'react';
import './Card.css';

function CardNominated(props) {
    return (
        <div className="Card-container" key={props.movie.imdbID}>
            <img src={props.movie.Poster === 'N/A' ? 'https://placehold.it/198x264&text=Image+Not+Found' : props.movie.Poster} alt={props.movie.Title}/>
            <div className="Card-content">
                <h2 className="Nominated-title">{props.movie.Title}</h2>
                <p>{props.movie.Year}</p>
                <button className="Button-red" onClick={() => {props.removeNominationCallback(props.movie)}}>Remove</button>
            </div>
        </div>
    )
}

export default CardNominated;