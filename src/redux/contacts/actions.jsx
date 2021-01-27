import { createAction } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

const addContact = createAction('contacts/add', (name, number) => ({
    payload: {
        contact: {id: uuid(), name, number},
    },
}));

const deleteContact = createAction('contacts/remove');

const changeOnFilter = createAction('contscts/changeOnFilter');

export default {addContact, deleteContact, changeOnFilter};