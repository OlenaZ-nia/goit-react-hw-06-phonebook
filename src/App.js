import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Container } from './components/Container/Container';
import  ContactForm  from "./components/ContactForm/ContactForm";
import { ContactList } from './components/ContactList/ContactList';
import SearchFilter from './components/SearchFilter/SearchFilter';
import { useLocalStorage } from './hooksCustom/useLocalStorage';

import 'modern-normalize/modern-normalize.css';

export default function App() {
  const [contacts, setContacts] = useLocalStorage('myContacts', []);
  const [filter, setFilter] = useState('');

  const addContact = ( name, number ) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const includeName = contacts.find(contact => contact.name === name);

    (includeName !== undefined) ?
      (alert(`${name} is already in contacts`)
      ):
    setContacts(contacts => ([...contacts, contact]))

  };

  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  const getExistsContact = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );

  };

  const deleteContact = (nameId) => {
    setContacts(prevState => prevState.filter(contact => contact.id !== nameId))
  };

  return (
      <Container>
        <h1>Phone</h1>
        <ContactForm onSubmit={ addContact}/>
        <h2>Contacts</h2>
        <SearchFilter value={filter} onChange={ handleChange}/>
        <ContactList contacts={getExistsContact()} onDeleteContact={ deleteContact}/>
      </Container>
    );
}
