import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import { removeBook } from '../redux/Book/Book';
import 'react-circular-progressbar/dist/styles.css';
import './Book.css';

const Book = ({
  id, title, author, chapter, progress,
}) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeBook(id));
  };

  return (
    <li className="book">
      <div className="interaction">
        <h2 className="title">{title}</h2>
        <p className="author">{author}</p>
        <div className="effectChange">
          <button type="button" className="comment">Comments</button>
          <button type="button" onClick={handleRemove} className="remove">
            Remove
          </button>
          <button type="button" className="edit">Edit</button>
        </div>
      </div>
      <div className="progress">
        <div className="completed">
          <div style={{ width: 68, height: 68 }}>
            <CircularProgressbar value={progress} />
          </div>
          <div className="perCentContainer">
            <h2>
              {progress}
              %
            </h2>
            <h3 style={{ fontFamily: 'Montserrat', opacity: 0.5, fontSize: 14 }}>Completed</h3>
          </div>
        </div>
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
  chapter: PropTypes.number.isRequired,
  progress: PropTypes.number.isRequired,
};

export default Book;
