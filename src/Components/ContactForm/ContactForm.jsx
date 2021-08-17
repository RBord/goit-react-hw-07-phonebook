import React, {useState} from 'react';
import shortid from 'shortid';
import { useSelector, useDispatch } from 'react-redux';
import { contactsSelectors } from '../../Redux/Phonebook';
import { addContact } from '../../Redux/Phonebook/phonebook-operations';
import s from '../ContactForm/ContactForm.module.css'

const nameInputId = shortid.generate();
const numberInputId = shortid.generate();

function ContactForm() {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const value = useSelector(state => contactsSelectors.getContacts(state));
    const dispatch = useDispatch();
    

    const handleChange = evt => {
        const { name, value } = evt.currentTarget;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;
            default:
                return;
        }
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        
        const hasSameName = value.find(contact => contact.name === name);
        if (hasSameName) {
            alert('Контакт с таким именем уже есть!');
            reset();
            return;
        }
        dispatch(addContact({ name, number }));
        reset();
    };

    const reset = () => {
        setName('');
        setNumber('');
    };

    return (
        <form onSubmit={handleSubmit} className={s.form}>
            <label htmlFor={nameInputId} className={s.label}><p className={s.text}>Name</p>
                <input
                    type="text"
                    name="name"
                    value={name}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    onChange={handleChange}
                    id={nameInputId}
                    required
                />
            </label>
            <label htmlFor={numberInputId} className={s.label}><p className={s.text}>Number</p>
                <input
                    type="tel"
                    name="number"
                    value={number}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    onChange={handleChange}
                    id={numberInputId}
                    required
                    
                />
            </label>
            <button type='submit' className={s.btn}>Add contact</button>
        </form>
    );
    
}

export default ContactForm;