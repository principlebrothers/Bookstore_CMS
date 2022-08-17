// Actions
const ADD_BOOK = 'bookstore/Books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/Books/REMOVE_BOOK';

const initialState = [];

// Reducer
const bookReducer = (state = initialState, action) => {
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
