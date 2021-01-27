import React from 'react';
import ReactDOM from 'react-dom';
import APP from './components/APP';
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(<Provider store={store}><APP/></Provider>, 
    document.querySelector('#root'));


