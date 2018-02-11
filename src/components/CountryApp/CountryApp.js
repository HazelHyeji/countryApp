import React from 'react';
import ReactDOM from 'react-dom';

import SearchCountry from '../SearchCountry/SearchCountry';
import Buttons from '../Buttons/Buttons';
import AllCountries from '../AllCountries/AllCountries';
import Quiz from '../Quiz/Quiz';



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
        event.preventdefault;
        this.setState({ searchfield: event.target.value });
        console.log(this.state.searchfield);
    }

    onRouteChange = (route) => {
        if (route === 'signout') {
            this.setState({ isSignedIn: false })
        } else if (route === 'home') {
            this.setState({ isSignedIn: true })
        }
        this.setState({ route: route });
    }

    render() {
        return (
            <div>
                <SearchCountry onSearchChange={this.onSearchChange} />
                <Buttons />
                <AllCountries nations={this.state.nations} searchfield={this.state.searchfield}/>
            </div>
        );
    }
}


export default CountryApp;