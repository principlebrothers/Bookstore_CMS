import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/Categories/Categories';
import './Categories.css';

const Categories = () => {
  const bookCategories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(checkStatus());
  };

  return (
    <div className="catContainer">
      <button type="button" onClick={handleClick} className="checkStatusBtn">
        Check status
      </button>
      <h2 className="catInfo">{bookCategories}</h2>
    </div>
  );
};

export default Categories;
