import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import {Link} from 'react-router-dom'
import Book from './Book.js'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class SearchBook extends Component {
  
  state = {
    query: '',
    books: []
  }

  updateQuery = (query) => {
   // console.log('query -->', query)
    this.setState({ query })
      if(query.length > 0) {
        BooksAPI.search(query, 20).then((books) => {
          if(books instanceof Array && books.length > 0)  {
            this.offShelf(books)
            this.onShelf(books)
            this.setState({books})
          }
          else {
            this.setState({books: []})
          }
        })
      }    
  }

  onShelf = (books) => {
    this.props.books.forEach((mybook) => {
      books.forEach((book) => {
        if(book.id === mybook.id) 
          book.shelf = mybook.shelf
      })
    })  
  }

  offShelf = (books) => {
    if (books)
      books.forEach((book) => book.shelf = "none")
  }
    
    render() {
        
      const {changeShelf} = this.props
      const {query, books} = this.state

      let results
        if (query) {
          const match = new RegExp(escapeRegExp(query), 'i')
          results = books.filter((book) => match.test(book.title || book.authors))
        } else {
          results = []
        }

      results.sort(sortBy('title')) 
        
      return (
        <div>
          <div className="search-books-bar">
            <Link className="close-search" to="/">Close</Link>
            <form>
              <div className="search-books-input-wrapper">
                <input 
                  style={{ width: 600 }}
                  type='text' 
                  placeholder='Search books by title or authors' 
                  value={query} 
                  onChange={(e) => this.updateQuery(e.target.value)} 
                />
              </div>
            </form>
          </div>
      
          <div className="search-books-results">
            <div className="search-books">
              <ol className="books-grid">
                {results.map((book) => (  
                  <Book
                    key={book.id}
                    changeShelf={changeShelf}
                    book = {book}
                  />
                ))}
              </ol>
            </div>
          </div>
        </div> 
      )
    }  
}

export default SearchBook