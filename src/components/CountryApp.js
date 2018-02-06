import React from 'react';
import ReactDOM from 'react-dom';

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

    buttonClickHandler = (e) => {
        console.log("button clicked");
        console.log(e.target.value);
        e.preventDefault();
        if( e.target.value == "allCountries" ){
            this.setState({ showCountry: !this.state.showCountry });
        } else if ( e.target.value == "quiz" ) {
            this.setState({ showQuiz: !this.state.showQuiz });
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        return (
            <div>
                <Main
                    buttonClickHandler={this.buttonClickHandler} 
                    showCountry={this.state.showCountry}
                    showQuiz={this.state.showQuiz}
                    searchChange={this.onSearchChange}
                />
                {this.state.showCountry && 
                    <AllCountries 
                        nations={this.state.nations}
                    />
                }
                {this.state.showQuiz && 
                    <Quiz 
                        buttonClickHandler={this.buttonClickHandler}
                        nations={this.state.nations}>
                    </Quiz>
                }
                <SearchCountry nations={this.state.nations}/>
            </div>
        );
    }
}

export default CountryApp;