import React, { Component } from 'react';
import { connect } from 'react-redux';
import contactsOperations from '../../Redux/Phonebook/phonebook-operations';
import s from '../ContactList/ContactList.module.css';

class ContactList extends Component {
    
    componentDidMount() {
        this.props.fetchContacts();
    }

    render() {
        const { value, onDeleteContact } = this.props;
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
    onDeleteContact: (id) => dispatch(contactsOperations.deleteContact(id)),
    fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});


export default connect(mapStateToProps, mapDispatchToProps)(ContactList);