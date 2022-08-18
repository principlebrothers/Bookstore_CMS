import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/Categories/Categories';

const Categories = () => {
  const bookCategories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(checkStatus());
  };

  return (
    <div className="catContainer">
      <button type="button" onClick={handleClick}>
        Check status
      </button>
      <h2>{bookCategories}</h2>
    </div>
  );
};

export default Categories;
