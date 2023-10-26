import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './ContactList.module.css';
import { deleteContact } from 'redux/ContactsSlice';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => {
    return state.contacts.items.filter(item =>
      item.name.toLowerCase().trim().includes(state.filter.toLowerCase().trim)
    );
  });
  return (
    <ul className={css.list}>
      {contacts.map(item => (
        <li className={css.contactItem} key={item.id}>
          <span className={css.contactName}>{item.name}:</span>
          <span className={css.contactNumber}>{item.number}</span>
          <button
            className={css.button}
            type="button"
            onClick={() => dispatch(deleteContact(item.id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
