// Imports
import React, { useEffect, useState } from 'react';
import Header from './header/Header';
import APIResults from './api_results_list/APIResults';
import Nominations from './nominates_list/Nominations';
import Footer from './footer/Footer';

// Style Imports
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalStyles";
import { lightTheme, darkTheme } from "./Themes";
import './App.css';

// Constants
const API_KEY = "9226a185";
const MAX_NOMINATIONS = 5;

function App() {

    /**
     * Adds a movie to the nominated array and updates the localStorage.
     * @param {any} movie 
     */
    const addNomination = (movie) => {
        if (nominatedMovies.length < MAX_NOMINATIONS && !isNominated(movie)) {
            var newState = nominatedMovies;
            newState.push(movie);
            localStorage.setItem('nominatedMovies', JSON.stringify(newState));
            setNominatedMovies(newState);
            setLength(newState.length);
            return true;
        }
        return false;
    }

    /**
     * Gets the length of the nominatedMovies array.
     */
    const getLength = () => { 
        return (nominatedMovies !== null) ? nominatedMovies.length : 0;
    }

    /**
     * Gets the nominatedMovies array from localStorage.
     */
    const getNominations = () => {
        return (localStorage.getItem('nominatedMovies') === null) ? [] : JSON.parse(localStorage.getItem('nominatedMovies'));
    }

    /**
     * Checks if the movie is a nominated movie.
     * @param {any} movie 
     */
    const isNominated = (movie) => {
        var result = false;
        if (nominatedMovies === null) {
            return result;
        }

        nominatedMovies.forEach(nominatedMovie => {
            if (movie.imdbID === nominatedMovie.imdbID) {
                result = true;
                return result;
            }
        });
        return result;
    }

    /**
     * Removes a movie from the nominated array and updates the localStorage.
     * @param {any} movie 
     */
    const removeNomination = (movie) => {
        var newState = nominatedMovies;
        newState = newState.filter(item => item.imdbID !== movie.imdbID);
        localStorage.setItem('nominatedMovies', JSON.stringify(newState));
        setNominatedMovies(newState);
        setLength(newState.length);
    }

    // Hooks for nominated movies array
    const [nominatedMovies, setNominatedMovies] = useState(getNominations());

    // Hooks for length of nominated movies array
    const [length, setLength] = useState(getLength())

    // Hooks for movies from the API results
    const [movies, setMovies] = useState(null);
    const [query, setQuery] = useState('');
    useEffect(() => {
        setMovies(null);

        fetch(`https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}&type=movie`)
            .then(response => response)
            .then(response => response.json())
            .then(response => {
                if (response.Response !== 'False') {
                    setMovies(response.Search);
                }
            })

    }, [query, nominatedMovies]);

    // Hooks for toggling between light and dark theme
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    const themeToggler = () => {
      if (theme === 'light') {
          setTheme('dark');
          localStorage.setItem('theme', 'dark'); 
      } else {
          setTheme('light');
          localStorage.setItem('theme', 'light');
      }
    }

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyles/>
            <div className="App">
                <Header 
                    className="Header-container"
                    theme={theme} 
                    queryCallback={setQuery} 
                    themeCallback={themeToggler}/>
                <div className="Column-container">
                    <APIResults 
                        movies={movies}
                        queryText={query}
                        addNominationCallback={addNomination}
                        isNominatedCallback={isNominated}/>
                    <Nominations 
                        length={length}
                        isNominatedCallback={isNominated}
                        nominations={nominatedMovies}
                        removeNominationCallback={removeNomination}/>
                </div>
                <Footer/>
            </div>
        </ThemeProvider>
    );
}
export default App;
