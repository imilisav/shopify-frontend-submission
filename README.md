# My Submission For the Shopify UX & Web Developer Intern Challenge

## Problem
For my application to the Front-End Developer Intern Position at Shopify, I was asked to implement a application that browses the OMDB api and allows a user to nominate their favourite movies for a chance to win "The Shoppies" award, similar to the Emmys or the Grammys.

For a more thorough explanation of the problem: [Problem Statement Documentation](https://docs.google.com/document/d/1AZO0BZwn1Aogj4f3PDNe1mhq8pKsXZxtrG--EIbP_-w/edit)

## Implementation
### Overview
Listed below, are the features I needed to implement (All have been implemented):
- Search results should come from OMDB's API (free API key: http://www.omdbapi.com/apikey.aspx).
- Each search result should list at least its title, year of release and a button to nominate that film.
- Updates to the search terms should update the result list
- Movies in search results can be added and removed from the nomination list.
- If a search result has already been nominated, disable its nominate button.
- Display a banner when the user has 5 nominations.

There were extra things I added in:
- Dark theme (who doesn't love a dark theme?)
- Storing the theme and nomination data into Local Storage
- I added a poster (if it was provided by the API) along with the required movie information, so the user has a better idea of what movie the API is referring to.
- I added in a CI/CD process via Travis to build the react app (which checks for build errors) and then delpoys to Github Pages, so I could focus more on building the application itself.

### Things I learned from this project
This project was a great example of how important tools like Redux are when handling state across multiple components in an application. This is especially crucial as the complexity of the application increases. For the sake of this project, as it was not too complex, I opted for just prop-drilling callbacks as I didn't want to bloat the project with more libraries than needed.

## Github Pages Demo
[Click here for the end result!](https://imilisav.github.io/shopify-frontend-submission/)