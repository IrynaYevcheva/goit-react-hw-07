// import { useState, useEffect } from 'react';
// import { nanoid } from 'nanoid';
import styles from './App.module.css';
import { ContactList } from '../ContactList/ContactList';
import { SearchBox } from '../SearchBox/SearchBox';
import { ContactForm } from '../ContactForm/ContactForm';

export default function App() {
  // const [contacts, setContacts] = useState(() => {
  //   const savedContacts = window.localStorage.getItem('saved-contacts');
  //   if (savedContacts !== null) {
  //     return JSON.parse(savedContacts);
  //   }
  //   return [
  // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //   ];
  // });

  // useEffect(() => {
  //   window.localStorage.setItem('saved-contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const [inputValue, setInputValue] = useState('');

  // const handleChange = evt => {
  //   setInputValue(evt.target.value.toLowerCase().trim());
  // };

  // const filteredContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(inputValue)
  // );

  // const addContact = (newContact, { resetForm }) => {
  //   setContacts(prevContacts => [
  //     ...prevContacts,
  //     { ...newContact, id: nanoid() },
  //   ]);
  //   resetForm();
  // };

  // const deleteContact = contactId => {
  //   setContacts(prevContacts => {
  //     return prevContacts.filter(contact => contact.id !== contactId);
  //   });
  // };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}
