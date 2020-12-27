// Imports
import React from 'react';
import CardAPIResults from '../card/CardAPIResults';

// Style Imports
import './APIResults.css';

function APIResults({ movies, queryText, isNominatedCallback, addNominationCallback }) {
    return (
        <div className="Left-column-container">
            <h2>Movie Results For: "{queryText}"</h2> 
            <ul className="Results-container">
                {movies !== null 
                    && movies.length > 0 
                    && movies.map(movie => 
                        <CardAPIResults 
                            movie={movie}
                            addNominationCallback={addNominationCallback}
                            isNominatedCallback={isNominatedCallback}/>
                    )}
            </ul>
        </div>
    )
}

export default APIResults;
