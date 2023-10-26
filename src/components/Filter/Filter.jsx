//import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/FilterSlice';
import css from './Filter.module.css';

//const filterId = nanoid();

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const showFilteredcontacts = e => {
    dispatch(filterContacts(e.target.value));
  };

  return (
    <div>
      <label className={css.formLabel}>
        Find contacts by name
        <input
          className={css.formInput}
          type="text"
          value={filter}
          onChange={showFilteredcontacts}
        />
      </label>
    </div>
  );
};
