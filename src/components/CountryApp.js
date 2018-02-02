import React from 'react';
import Main from './Main/Form';
import AllCountries from './Countries/AllCountries';

class CountryApp extends React.Component {
    render() {
        return (
            <div>
                <AllCountries />
                <Main />
            </div>
        );
    }
}
export default CountryApp;