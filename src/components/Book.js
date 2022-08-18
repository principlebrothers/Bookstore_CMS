import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/Book/Book';

const Book = ({
  id, title, author, chapter, genre, progress,
}) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeBook(id));
  };

  return (
    <li className="book">
      <div>
        <p className="genre">{genre}</p>
        <h2 className="title">{title}</h2>
        <p className="author">{author}</p>
        <div className="effectChange">
          <button type="button">Comments</button>
          <button type="button" onClick={handleRemove}>
            Remove
          </button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="progress">
        <h3 className="completed">
          {progress}
          % Completed
        </h3>
      </div>
      <div className="detailedProgress">
        <h3 className="chapterHeader">CURRENT CHAPTER</h3>
        <p className="chapter">{chapter}</p>
        <button type="button" className="update">
          UPDATE PROGRESS
        </button>
      </div>
    </li>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  chapter: PropTypes.number.isRequired,
  progress: PropTypes.number.isRequired,
};

export default Book;
