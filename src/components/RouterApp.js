import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import CountryApp from './CountryApp/CountryApp';
import Quiz from './Quiz/Quiz';
import NotFound from './NotFound/NotFound';
;


class RouterApp extends React.Component {
    render(){
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="/" component={CountryApp} exact={true}/>
                        <Route path="/quiz" component={Quiz} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default RouterApp;