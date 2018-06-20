import React from 'react'

const Book = ({book , changeShelf}) => {

  const img = book.imageLinks ? book.imageLinks.thumbnail || book.imageLinks.smallThumbnail : null

  return(
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url('+ img +')' }}></div>
          <div className="book-shelf-changer">
            <select value={book.shelf} onChange={(e) => {changeShelf(book, e.target.value)}}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    </li>
  ) 
}

export default Book