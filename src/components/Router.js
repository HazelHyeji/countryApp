import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import CountryApp from './CountryApp/CountryApp';
import Quiz from './Quiz/Quiz';
import NotFound from './NotFound/NotFound';
;


class Router extends React.Component {
    state = {
        nations: [],
        showCountry: false,
        showQuiz: false,
        searchfield: ''
    };

    componentDidMount() {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(response => response.json())
            .then(nations => {
                console.log("Nations:", nations);
                this.setState({ nations: nations });
            })
            .catch(error => console.log("error!", error))
    }

    // buttonClickHandler = (e) => {
    //     console.log("button clicked");
    //     console.log(e.target.value);
    //     e.preventDefault();
    //     if (e.target.value == "allCountries") {
    //         this.setState({ showCountry: !this.state.showCountry });
    //     } else if (e.target.value == "quiz") {
    //         this.setState({ showQuiz: !this.state.showQuiz });
    //     }
    // }

    onSearchChange = (event) => {
        event.preventdefault;
        this.setState({ searchfield: event.target.value });
        console.log(this.state.searchfield);
    }
    
    render(){
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="/" component={CountryApp} exact={true} />
                        <Route path="/quiz" render={props => <Quiz nations={props.nations} {...props} />} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default Router;