import React from 'react';
// import { v4 as uuidv4 } from 'uuid';
import ContactList from './contacts/contacts';
import ContactForm from './contactForm/contactForm';
import Filter from './filter/filter';
import Logo from './logo/logo';
import  './app/app.module.css';
import { connect } from 'react-redux';

const APP = () =>{
    return (
        <div>
        <Logo />
        <ContactForm />
        <h2>Contacts</h2>
        <Filter/>
        <ContactList />
        
    </div>
    );
}
const mapStateToProps = state => {
    return {
      contacts: state.contacts.items
    };
};
    
export default connect(mapStateToProps)(APP);
