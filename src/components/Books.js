import React from 'react';
import InputBooks from './InputBooks';

function Books() {
  return (
    <div className="mainBookContainer">
      <InputBooks />
      <button type="button">Delete</button>
    </div>
  );
}

export default Books;
