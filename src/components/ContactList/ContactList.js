import React from 'react';
import PropTypes from 'prop-types';
// import ContactItem from '../ContactItem/ContactItem';
// import { List, ListItem, ContactName, DeleteButton } from 
//   './ContactList.styled';
import {
  ListContainer,
  ListItem,
  ContactName,
  DeleteButton,
  PhonebookImage,
} from './ContactList.styled';


const ContactList = ({ contacts, onDelete }) => {
  return (
    // <List>
     <>
      
      <ListContainer>
      {contacts.map(contact => (
        <ListItem key={contact.id}>
          <ContactName>{contact.name}</ContactName>
          <DeleteButton onClick={() => onDelete(contact.id)}>
            Delete
          </DeleteButton>
        </ListItem>
      ))}
      </ListContainer>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
