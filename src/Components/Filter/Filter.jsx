import React from 'react';
import shortid from 'shortid';
import { useSelector, useDispatch } from 'react-redux';
import { contactsSelectors, changeFilter } from '../../Redux/Phonebook';

import s from '../Filter/Filter.module.css';

const nameInputId = shortid.generate();

function Filter () {

    const value = useSelector(state => contactsSelectors.getFilter(state));
    const dispatch = useDispatch();

    return (
        <label htmlFor={nameInputId}>
            Find contacts by Name
            <input type="text" value={value} onChange={(evt) => dispatch(changeFilter(evt.target.value))} id={nameInputId} className={s.input}/>
        </label>
    )
}

export default Filter;