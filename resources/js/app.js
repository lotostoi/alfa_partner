/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require("./bootstrap");

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import React from "react";
import ReactDom from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.scss';

import App from './App.jsx';
import {Provider} from 'react-redux';
import {store} from './store';


ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.querySelector("#root"));
