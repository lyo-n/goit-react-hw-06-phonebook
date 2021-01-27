import React, {Component} from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import styles from './contactForm.module.css';
import actions from '../../redux/contacts/actions';

class ContactForm extends Component {
    state = {
        name: '',
        number: '',
      };

    change = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name] : value,
        });
    };
    
    inputSubmit = (e) => {
        e.preventDefault();
        const { name, number } = this.state;
        this.props.onSubmit(name, number);
        this.setState ({name: "", number: ""});
    };

    render() {
        const { name, number } = this.state;
        return (
            <form onSubmit={this.inputSubmit} className={styles.form}> 
                <div className={styles.formBlock}>
                <label className={styles.label}>
                    Name
                    <input  className={styles.inpt}
                            type="text"
                            name="name"
                            value={name}     
                            onChange={this.change}   
                    />
                </label>
                <label className={styles.label}>
                    Number
                    <input  className={styles.inpt}
                            type="text"
                            name="number"
                            value={number}
                            onChange={this.change}
                    />
                </label>
                </div>
                <button className={styles.btn} type="submit">Add contact</button>
            </form>
        );
    }
}

ContactForm.propTypes = {
    addContact: propTypes.func.isRequired
};

export default connect(null, {
    onSubmit: actions.addContact,
})(ContactForm);