import React from 'react';
import { useSelector } from 'react-redux';
import InputBooks from './InputBooks';
import Book from './Book';

function BookList() {
  const books = useSelector((state) => state.books);
  return (
    <div className="ListContainer">
      <ul>
        {books.map((book) => (
          <Book
            book={book}
            key={book.id}
            id={book.id}
            author={book.author}
            title={book.title}
            chapter={book.chapter}
            progress={book.progress}
            genre={book.genre}
          />
        ))}
      </ul>
      <InputBooks />
    </div>
  );
}

export default BookList;
