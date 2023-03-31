import React from 'react';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import { ContactItem } from '../ContactItem/ContactItem';
import { Conteiner, Header, Title } from './App.styled';
import { getContacts } from 'redux/selectors';
import { useSelector } from 'react-redux';

export const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <Conteiner>
      <div>
        <Header>Phonebook</Header>
        <ContactForm />
      </div>
      <div>
        {contacts.length > 0 && <Filter /> && <Title>Contacts</Title>}
        <ContactList>
          <ContactItem />
        </ContactList>
      </div>
    </Conteiner>
  );
};
