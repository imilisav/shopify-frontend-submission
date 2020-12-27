// Imports
import React, { useEffect, useState } from 'react';
import CardNominated from '../card/CardNominated';

// Style Imports
import './Nominations.css';

function Nominations({ nominations, length, removeNominationCallback }) {

    // Hook for keeping track of how many nominations the user has
    const [nomineeList, setNomineeList] = useState(nominations);
    useEffect(() => {
        setNomineeList(null);
        var nominees = nominations;
        setNomineeList(nominees);
    }, [nominations])

    // Hook to check user has successfully nominated 5 movies.
    const [isSuccess, setSuccess] = useState(false);
    useEffect(() => {
        setSuccess(length === 5);
    }, [length]);

    return (
        <div className="Right-column-container">
            {isSuccess && <p className="Success-banner">You have successfully chosen 5 movies!</p>}
            <h2>Your Nominations ({length}/5 chosen):</h2>
            <ul className="Nominations-container">
                {nomineeList !== null && nomineeList.length > 0 && nomineeList.map(movie => <CardNominated key={movie.imdbID} movie={movie} removeNominationCallback={removeNominationCallback}/>)}
            </ul>
        </div>
    )
}

export default Nominations;