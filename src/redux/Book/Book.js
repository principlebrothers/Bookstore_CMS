import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Actions
const ADD_BOOK = 'bookstore/Books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/Books/REMOVE_BOOK';
const BOOKS_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/4ok0TSC49cD6dE8j7cYc/books';

export const fetchBooks = createAsyncThunk('bookstore/Books/fetchBooks', async () => {
  try {
    const { data } = await axios.get(BOOKS_URL);
    return [...data];
  } catch (err) {
    return err.message;
  }
});

const initialState = {
  books: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

// Reducer
const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        books: [...state.books, action.payload],
      };
    case REMOVE_BOOK:
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload),
      };
    default:
      return state;
  }
};

// Action Creator
export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: id,
});

export default bookReducer;
