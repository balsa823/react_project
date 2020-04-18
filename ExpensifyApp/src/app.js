//install -> import -> use
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpence} from './actions/expences';
import {setTextFilter} from './actions/filters';
import getVisibleExpences from './selectors/expences';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();


const state = store.getState();
const visibleExpences = getVisibleExpences(state.expences, state.filters);


store.dispatch(    addExpence({description: "Water Bill", amount: 4500})    );
store.dispatch(addExpence({description: "Gas Bill" , createdAt: 1000}));
store.dispatch(addExpence({ description: "Rent Bill", amount: 109500 }));



//getVisibleExpences(store.expences);

const jsx = (
    <Provider store= {store} >
        <AppRouter />
    </Provider>
);


ReactDOM.render(jsx, document.getElementById('app'));



