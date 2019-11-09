import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Contact from './components/Contact';
import Users from './components/Users';
import UserEdit from './components/Users/User-Edit'
import Header from './components/Header';
import * as serviceWorker from './serviceWorker';
// import { Router, Route, browserHistory } from 'react-router';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { createStore, combineReducers } from 'redux';

import { Provider } from 'react-redux'
import userReducer from './services/Users/reducer';
const rootReducer = combineReducers({
    users: userReducer
})

const store = createStore(rootReducer);
const routing = (
    <Router>
        <Provider store={store}>
            <Header></Header>

            <div>
                <Route path="/" exact component={App} />
                <Route path="/contact" component={Contact} />
                <Route path="/user" exact component={Users} />
                <Route path="/user/add"  exact component={UserEdit} />
                <Route exact path="/user/edit/:userId"  component={UserEdit} />


            </div>
        </Provider>
    </Router>
)



ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
