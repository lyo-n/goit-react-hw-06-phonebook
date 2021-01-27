import React from 'react';
import propTypes from 'prop-types';
import styles from './filter.module.css';
import actions from '../../redux/contacts/actions';
import { connect } from 'react-redux';

const Filter = ({value, changeFilter}) => {
    return (
        <div className={styles.searchBlock}>
            Find contacts by name
            <input  type="text" value={value} onChange = {(e) => changeFilter(e.target.value)}/>
        </div>
    );
}

Filter.propTypes = {
    value: propTypes.string.isRequired,
    changeFilter: propTypes.func.isRequired,
};

const mapStateToProps = state => {
    return {
      value: state.contacts.filter,
    };
};
  
const mapDispatchToProps = {
    changeFilter: actions.changeOnFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);