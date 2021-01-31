import React from 'react';
import styles from '../contacts/contacts.module.css';
import { connect } from 'react-redux';
import actions from '../../redux/contacts/actions';
import propTypes from 'prop-types';


const ContactItem = 
    ({ contact: {name, number }, removeContact }) => {
            return(
            <li className={styles.item}>
            {name}: {number}
            {<button className={styles.btn} type="button" name="delete" onClick={removeContact}>Delete</button>}
        </li>
        );
    };

ContactItem.propTypes = {
    removeContact: propTypes.func.isRequired,
    contacts: propTypes.arrayOf(propTypes.shape({
        id: propTypes.string.isRequired,
        name: propTypes.string.isRequired,
        number: propTypes.string.isRequired,
        }),
    ),
};

const mapDispatchToProps  = (dispatch, ownProps) =>({
    removeContact: () =>
    dispatch(actions.deleteContact(ownProps.contact.id)),
});
      
export default connect(null, mapDispatchToProps)(ContactItem);