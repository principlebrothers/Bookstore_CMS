import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './Book/Book';
import categoriesReducer from './Categories/Categories';

const store = configureStore({
  rootReducer: {
    books: bookReducer,
    categories: categoriesReducer,
  },
});

export default store;
