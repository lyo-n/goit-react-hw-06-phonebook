import React from 'react';
import propTypes from 'prop-types';
import ContactItem from '../contactItem/contactItem';
import styles from './contacts.module.css';
import { connect } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const itemsStyles = {
    enter: styles.enter,
    enterActive: styles.enterActive,
    exit: styles.exit,
    exitActive: styles.exitActive,
}

const ContactList = ({contacts}) => (
    <TransitionGroup component="ul">
       {contacts && contacts.map((contact) => (
        <CSSTransition key={contact.id} timeout={250} classNames={itemsStyles}>
           <ContactItem contact={contact} />
        </CSSTransition>
       ))} 
    </TransitionGroup>
);  

ContactList.propTypes = {
    contacts: propTypes.arrayOf(propTypes.shape({
        id: propTypes.string.isRequired,
        name: propTypes.string.isRequired,
        number: propTypes.string.isRequired,
    }),),
};

const mapStateToProps = ({ contacts }) => ({
    contacts: contacts.arrayItems.filter(contact =>
      contact.name.toLowerCase().includes(contacts.filter.toLowerCase()),
    ),
  });

export default connect(mapStateToProps)(ContactList);
