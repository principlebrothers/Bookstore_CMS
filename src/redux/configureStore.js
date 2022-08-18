import { configureStore, combineReducers } from '@reduxjs/toolkit';
import bookReducer from './Book/Book';
import categoriesReducer from './Categories/Categories';

const rootReducer = combineReducers({
  books: bookReducer,
  categories: categoriesReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
