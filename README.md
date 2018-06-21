# MyReads: A Book Tracking App

The project was made for Udacity Front-End program as a part of Google Developer Nanodegree Scholarship.

## Project Overview

The starter code was provided by Udacity and the goal for the MyReads project was to create a bookshelf app that allows to select and categorize books one have read, is currently reading, or want to read, by converting a static code to a dynamic application using React.

### Requirements to finish the project

- The main page shows 3 shelves for books, and each book is shown on the correct shelf and each book has a control that allows users to move books between shelves.
- The search page has a search input field. As the user types into the search field, books that match the query are displayed on the page.
- If a book is assigned to a shelf on the main page and that book appears on the search page, the correct shelf should be selected on the search page. The option "None" should be selected if a book has not been assigned to a shelf.

## Instruction

1. Download the repository and save it on your computer
2. From inside the new directory, install dependencies with `npm install` (you will need Node.js and npm already installed on your machine)
3. Use command line `npm start` to run the application in you browser (the server will automatically run on port 3000).

### Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.
