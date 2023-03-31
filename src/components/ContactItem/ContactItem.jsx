import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getContacts, getFilter } from 'redux/selectors';
import { Button, Li, Span } from './ContactItem.styled';
import { deleteContact } from 'redux/operations';

export const ContactItem = () => {
  const contactList = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const normalaizeFilter = filter.toLowerCase();

  const visibleContacts = contactList.filter(contact =>
    contact.name.toLowerCase().includes(normalaizeFilter)
  );

  return visibleContacts.map(contact => (
    <Li key={contact.id}>
      <Span>{contact.name}: </Span>
      <Span>{contact.phone}</Span>
      <Button onClick={() => dispatch(deleteContact(contact.id))}>
        Delete
      </Button>
    </Li>
  ));
};