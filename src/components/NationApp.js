import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import Main from './Main/Form';
import AllCountries from './Countries/AllCountries';
import Quiz from './Quiz/Quiz';
import SearchCountry from './SearchCountry/SearchCountry';

class CountryApp extends React.Component {
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
        this.setState({ searchfield: event.target.value })
    }

    render() {
        return (
            <div>
                <SearchCountry onSearchChange={this.onSearchChange}></SearchCountry>
                <Buttons></Buttons>
                <AllCountries></AllCountries>
            </div>
        );
    }
}

export default CountryApp;