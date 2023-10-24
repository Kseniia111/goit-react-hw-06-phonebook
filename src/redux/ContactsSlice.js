import { createSlice, nanoid } from '@reduxjs/toolkit';

// const contactsInitialState = {
//   items: [],
// };
const contactsInitialState = [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,

  reducers: {
    addContacts: {
      reducer(state, action) {
        // state.items.push(action.payload);
        state.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      // const index = state.items.findIndex(item => item.id === action.payload);
      // state.items.splice(index, 1);
      const index = state.findIndex(task => task.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addContacts, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
