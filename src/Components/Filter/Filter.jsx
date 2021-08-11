import React from 'react';
import shortid from 'shortid';
import { connect } from 'react-redux';
import { changeFilter } from '../../Redux/Phonebook/phonebook-actions';

import s from '../Filter/Filter.module.css';

const nameInputId = shortid.generate();

const Filter = ({value, onChange }) => (
    <label htmlFor={nameInputId}>
        Find contacts by Name
        <input type="text" value={value} onChange={onChange} id={nameInputId} className={s.input}/>
    </label>
)

const mapStateToProps = (state) => ({
    value: state.phonebook.filter,
});
const mapDispatchToProps = dispatch => ({
    onChange: (evt) => dispatch(changeFilter(evt.target.value)),
});

export default connect(mapStateToProps,mapDispatchToProps)(Filter);