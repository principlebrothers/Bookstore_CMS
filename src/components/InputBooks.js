import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/Book/Book';

function InputBooks() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = {
      id: uuidv4(),
      title,
      author,
      progress: 30,
      genre: 'Psychology',
      chapter: 2,
    };

    if (title.length && author.length) {
      dispatch(addBook(book));
      setTitle('');
      setAuthor('');
    }
  };

  return (
    <div>
      <h3 className="addBookHeader">ADD NEW BOOK</h3>
      <form className="form-container">
        <input
          type="text"
          placeholder="Add title..."
          value={title}
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Add Author's name..."
          value={author}
          name="author"
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <button type="button" onClick={handleSubmit}>ADD BOOK</button>
      </form>
    </div>
  );
}

export default InputBooks;
