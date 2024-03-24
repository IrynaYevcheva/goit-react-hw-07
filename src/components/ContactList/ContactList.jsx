import style from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { selectItems } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';
import { Contact } from '../Contact/Contact';

const getFilteredContacts = (contacts, nameFilter) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(nameFilter.toLowerCase())
  );
};

export const ContactList = () => {
  const contacts = useSelector(selectItems);
  const nameFilter = useSelector(selectNameFilter);
  const filteredContacts = getFilteredContacts(contacts, nameFilter);

  return (
    <ul className={style.listContact}>
      {filteredContacts.map(contact => (
        <li className={style.listItem} key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};
