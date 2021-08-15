import React, { Component } from 'react';
import { connect } from 'react-redux';
import { contactsSelectors } from '../../Redux/Phonebook';
import { deleteContact, fetchContacts } from '../../Redux/Phonebook/phonebook-operations';
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

const mapStateToProps = state => ({
    value: contactsSelectors.getFiltredContacts(state),
    contacts: contactsSelectors.getContacts(state),
})
const mapDispatchToProps = dispatch => ({
    onDeleteContact: (id) => dispatch(deleteContact(id)),
    fetchContacts: () => dispatch(fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);