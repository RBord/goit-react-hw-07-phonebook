import React from 'react';
import { connect } from 'react-redux';
import { deleteContact } from '../../Redux/Phonebook/phonebook-actions';
import s from '../ContactList/ContactList.module.css';

const ContactList = ({value, onDeleteContact}) => {
    return (
        <ul value={value}>
            {value.map(({ id, name, number}) => {
                return (
                    <div key={id} className={s.divItem}>
                        <li className={s.liItem}>{name}: {number}</li> <button onClick={()=>onDeleteContact(id)} className={s.btn}>Delete</button>
                    </div>
                )
            })}
        </ul>
    )
}

const getFiltredContacts = (allContacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return allContacts.filter(({name}) =>
        name.toLowerCase().includes(normalizedFilter));
}

const mapStateToProps = ({phonebook: {contacts, filter}}) => ({
    value: getFiltredContacts (contacts, filter)
})
const mapDispatchToProps = dispatch => ({
    onDeleteContact: (id) => dispatch(deleteContact(id)),
});


export default connect(mapStateToProps, mapDispatchToProps)(ContactList);