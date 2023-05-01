import React from 'react';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import { Conteiner, Header, Title } from './App.styled';
import { selectContacts } from 'redux/selectors';
import { useSelector } from 'react-redux';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const isContacts = contacts.length > 0;

  return (
    <Conteiner>
      <div>
        <Header>Phonebook</Header>
        <ContactForm />
      </div>
      <div>
        {isContacts ? <Filter /> : ''}
        {isContacts ? <Title>Contacts</Title> : ''}
        <ContactList />
      </div>
    </Conteiner>
  );
};
