import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../redux/Book/Book';
import InputBooks from './InputBooks';
import Book from './Book';

function BookList() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  return (
    <div className="ListContainer">
      <ul>
        {books.map((book) => (
          <Book
            book={book}
            key={book[0]}
            id={book[0]}
            author={book[1][0].author}
            title={book[1][0].title}
          />
        ))}
      </ul>
      <InputBooks />
    </div>
  );
}

export default BookList;
