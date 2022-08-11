import React, { useState } from 'react';

function InputBooks() {
  const [book, setBook] = useState({ title: '', author: '' });

  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => e.preventDefault();

  return (
    <div>
      <h3 className="addBookHeader">ADD NEW BOOK</h3>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          placeholder="Add title..."
          value={book.title}
          name="title"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Add Author's name..."
          value={book.author}
          name="author"
          onChange={handleChange}
        />
      </form>
      <h5>
        Title:
        {book.title}
      </h5>
      <h5>
        Author:
        {book.author}
      </h5>
    </div>
  );
}

export default InputBooks;
