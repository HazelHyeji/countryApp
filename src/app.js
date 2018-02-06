import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import Router from './components/Router/Router'
import CountryApp from './components/CountryApp';
import 'normalize.css/normalize.css';
// import './styles/styles.scss';



ReactDOM.render(<Router />, document.getElementById('app'));

