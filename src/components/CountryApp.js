import React from 'react';
import Main from './Main/Form';
import AllCountries from './Countries/AllCountries';

class CountryApp extends React.Component {
    state = {
        nations: [],
        showCountry: false,
        searchfield: ''
    };
    
    componentWillMount() {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(response => response.json())
            .then(nations => {
                console.log("Nations:", nations);
                this.setState({ nations: nations });
            })
            .catch(error => console.log("error!", error))
    }

    countryClickHandler = () => {
        this.setState({ showCountry: !this.state.showCountry });
    }

    render() {
        return (
            <div>
                <Main />
                <AllCountries nations={this.state.nations}/>
            </div>
        );
    }
}
export default CountryApp;