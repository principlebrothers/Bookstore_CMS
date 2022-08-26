import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Actions
const ADD_BOOK = 'bookstore/Books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/Books/REMOVE_BOOK';
const FETCH_BOOKS = 'bookstore/Books/FETCH_BOOKS';
const BOOKS_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/4ok0TSC49cD6dE8j7cYc/books';

const books = [];

// Reducer
const bookReducer = (state = books, action) => {
  switch (action.type) {
    case `${FETCH_BOOKS}/fulfilled`:
      return action.payload.books;
    case `${ADD_BOOK}/fulfilled`:
      return [...state, action.payload.book];
    case `${REMOVE_BOOK}/fulfilled`:
      return state.filter((book) => book[0] !== action.payload.id);
    default:
      return state;
  }
};

// Fetch book
export const fetchBooks = createAsyncThunk(FETCH_BOOKS, async () => {
  try {
    const { data } = await axios.get(BOOKS_URL);
    return { books: Object.entries(data) };
  } catch (err) {
    return err.message;
  }
});

// Add book
export const addBook = createAsyncThunk(ADD_BOOK, async (book) => {
  await axios.post(BOOKS_URL, {
    item_id: book.id,
    title: book.title,
    author: book.author,
    category: 'null',
  });
  return {
    book: [
      book.id,
      [
        {
          author: book.author,
          title: book.title,
          category: 'null',
        },
      ],
    ],
  };
});

// Remove book
export const removeBook = createAsyncThunk(REMOVE_BOOK, async (id) => {
  await axios.delete(`${BOOKS_URL}/${id}`);
  return { id };
});

export default bookReducer;
