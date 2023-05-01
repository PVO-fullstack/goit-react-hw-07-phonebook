import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { Ul, Li } from './ContactList.styled';
import { selectContacts, selectFilter } from 'redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contactList = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const normalaizeFilter = filter.toLowerCase();

  const visibleContacts = contactList.filter(contact =>
    contact.name.toLowerCase().includes(normalaizeFilter)
  );

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Ul>
      {visibleContacts.map(contact => {
        const { id, name, phone } = contact;
        return (
          <Li key={id}>
            <ContactItem id={id} name={name} phone={phone} />
          </Li>
        );
      })}
    </Ul>
  );
};
