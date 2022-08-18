import { v4 as uuidv4 } from 'uuid';
// Actions
const ADD_BOOK = 'bookstore/Books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/Books/REMOVE_BOOK';

const books = [
  {
    id: uuidv4(),
    title: 'Please Understand Me II',
    author: 'David Kerisey',
    progress: 70,
    genre: 'Psychology',
    chapter: 7,
  },
  {
    id: uuidv4(),
    title: 'Do not pack your bags yet',
    author: 'Abel Damina',
    progress: 100,
    genre: 'Life',
    chapter: 10,
  },
  {
    id: uuidv4(),
    title: 'Person of Interest',
    author: 'Jonathan Nolan',
    progress: 80,
    genre: 'Science Fiction',
    chapter: 8,
  },
  {
    id: uuidv4(),
    title: 'Rich Dad Poor Dad',
    author: 'Robert Kiyosaki',
    progress: 20,
    genre: 'Finance',
    chapter: 5,
  },
  {
    id: uuidv4(),
    title: 'The pupose of Love and Marriage',
    author: 'Myles Munroe',
    progress: 10,
    genre: 'Relationship',
    chapter: 2,
  },
];

// Reducer
const bookReducer = (state = books, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

// Action Creator
export const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export default bookReducer;
