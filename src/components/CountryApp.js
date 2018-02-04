import React from 'react';
import Main from './Main/Form';
import AllCountries from './Countries/AllCountries';

class CountryApp extends React.Component {
    state = {
        nations: [],
        showCountry: false,
        searchfield: ''
    };
    
    componentDidMount() {
        console.log("did Mount!")
        fetch('https://restcountries.eu/rest/v2/all')
            .then(response => response.json())
            .then(nations => {
                console.log("Nations:", nations);
                this.setState({ nations: nations });
            })
            .catch(error => console.log("error!", error))
    }

    countryClickHandler = (e) => {
        e.preventDefault();
        console.log(this.state.showCountry)
        this.setState({ showCountry: !this.state.showCountry });
    }

    render() {
        return (
            <div>
                <Main 
                    countryClickHandler={this.countryClickHandler} 
                    showCountry={this.state.showCountry}
                />
                {this.state.showCountry && 
                    <AllCountries 
                        nations={this.state.nations}
                    />
                }
            </div>
        );
    }
}

export default CountryApp;