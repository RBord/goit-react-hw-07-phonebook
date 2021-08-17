import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsSelectors } from '../../Redux/Phonebook';
import { deleteContact, fetchContacts } from '../../Redux/Phonebook/phonebook-operations';
import s from '../ContactList/ContactList.module.css';
function ContactList () {
    const value = useSelector(state => contactsSelectors.getFiltredContacts(state));
    const dispatch = useDispatch();
    

    useEffect(() => {
        
        dispatch(fetchContacts())
    }, [dispatch]);

    return (
        <ul value={value}>
            {value.map(({ id, name, number}) => {
                return (
                    <div key={id} className={s.divItem}>
                        <li className={s.liItem}>{name}: {number}</li> <button onClick={() => dispatch(deleteContact(id))} className={s.btn}>Delete</button>
                    </div>
                )
            })}
        </ul>
    )
    
}

export default ContactList;