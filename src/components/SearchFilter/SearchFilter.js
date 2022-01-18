import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/contacts-selectors';
import actions from '../../redux/contacts-actions';

import s from './SearchFilter.module.css';


const SearchFilter = () => {
    const value = useSelector(getFilter);
    const dispatch = useDispatch();

    return (
            <label className={s.label}> Find contacts by name
            <input
                className={s.searchInput}
                type="text"
                name="query"
                value={value}
                autoComplete="off"
                placeholder="Search contact"
                onChange={(e)=>dispatch(actions.updateFilter(e.target.value))}
            />
            </label>
        );
}
export default SearchFilter;



