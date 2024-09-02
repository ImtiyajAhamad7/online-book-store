import { createSlice } from '@reduxjs/toolkit';
import popularBooks from './data/popularBooks';

const initialState = {
    popularBooks
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      action.payload.id =   state.popularBooks.length +1;
      state.popularBooks.push(action.payload);
    },
  },
});

export const { addBook } = booksSlice.actions;

export default booksSlice.reducer;
