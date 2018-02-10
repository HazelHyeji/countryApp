import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import CountryApp from './components/CountryApp/CountryApp';
import 'normalize.css/normalize.css';
// import './styles/styles.scss';


ReactDOM.render(<CountryApp />, document.getElementById('app'));

