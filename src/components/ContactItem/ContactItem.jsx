import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Button, Span } from './ContactItem.styled';
import { deleteContact } from 'redux/operations';

export const ContactItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  return (
    <>
      <Span>{name}: </Span>
      <Span>{phone}</Span>
      <Button onClick={() => dispatch(deleteContact(id))}>Delete</Button>
    </>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
