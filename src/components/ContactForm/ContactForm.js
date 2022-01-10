import { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import s from './ContactForm.module.css';

export default function ContactForm({onSubmit}) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const nameInputId = nanoid();

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit(name, number);
        setName('');
        setNumber('');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
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
    
    return (
        <form className={s.form} onSubmit={handleSubmit}>
            <label className={s.label}> Name
                <input className={s.input}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                       onChange={handleChange}
                       id={nameInputId}
                       value={name}
                />
            </label>
            <label className={s.label}> Namber
                <input className={s.input}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                       onChange={handleChange}
                       value={number}
                />
            </label>
            <button type="submit" className={s.btnAddContact}>
                <span className={s.btnText}>Add contact</span>
            </button>
            
        </form>
    )

}

ContactForm.propTypes = {
        onSubmit: PropTypes.func.isRequired,
    };






