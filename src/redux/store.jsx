import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import reducer from './contacts/reducer';

const persistConfig = {
    key: 'root',
    storage,
};

const reducing = combineReducers({
    contacts: reducer,
});

const persistReduce = persistReducer(persistConfig, reducing);

const store = configureStore({
  reducer: persistReduce,
  middleware: [thunk],
});

persistStore(store);

export default store;
