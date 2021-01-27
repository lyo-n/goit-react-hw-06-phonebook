import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import actions from './actions';

const addContactMore = (state, action) => {
    if (
        state && state.find(contact => action.payload.contact.name === contact.name)
    ) { alert('Такой пользователь уже есть в Вашей телефонной книге!!!');
        return state;
      }else{
        return [...state, action.payload.contact];
    }
};

const deleteContact = (state, action) => state.filter(contact => contact.id !== action.payload);
const changeFilter = (state, action) => action.payload;

const arrayItems = createReducer([], {
    [actions.addContact]: addContactMore,
    [actions.deleteContact]: deleteContact,
});

const filter = createReducer('', {
    [actions.changeOnFilter]: changeFilter,
});

export default combineReducers({
    arrayItems,
    filter,
});