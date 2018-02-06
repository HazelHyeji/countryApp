import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';


import SearchCountry from './SearchCountry/SearchCountry';
import Buttons from './Buttons/Buttons';
import AllCountries from './AllCountries/AllCountries';
import Quiz from './Quiz/Quiz';
import NotFound from './NotFound/NotFound';
import CountryApp from '../../components/CountryApp';

const Router = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={CountryApp} exact={true} />
                <Route path="/quiz" component={Quiz}/>
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default Router;
