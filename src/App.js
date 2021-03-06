import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './BookShelf'
import SearchBook from './SearchBook'

class BooksApp extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
      //console.log(this.state.books)
    })
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      book.shelf = shelf;
      this.setState(state => ({
        books: state.books.filter(b => b.id !== book.id).concat([book])
      }))
    })
    //console.log(book, shelf)
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookShelf
                  title='Currently Reading'
                  shelf='currentlyReading'
                  books={this.state.books}
                  changeShelf={this.changeShelf}
                />
                <BookShelf
                  title='Want to Read'
                  shelf='wantToRead'
                  books={this.state.books}
                  changeShelf={this.changeShelf}
                />
                <BookShelf
                  title='Read'
                  shelf='read'
                  books={this.state.books}
                  changeShelf={this.changeShelf}
                />
              </div>
            </div>
            <div className="open-search">
              <Link to='/search'>Add a book</Link>
            </div>
          </div>
        )}
        />

        <Route path='/search' render={({ history }) => (
          <div>
            <SearchBook
              books={this.state.books}
              changeShelf={this.changeShelf}
            />
          </div>
        )}
        />
      </div>
    )
  }
}

export default BooksApp
