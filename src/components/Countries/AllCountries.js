import React, { Component } from 'react';
import CountryList from '../CountryList/CountryList';

class AllCountries extends Component {
    state = {
        nations: [],
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
    render() {
        return(
            <div>
                {
                    this.state.nations.map((nation, i) => {
                        return (<CountryList
                            key={i}
                            name={nation.name}
                            flag={nation.flag}
                            demonym={nation.demonym}
                            />
                        );
                    })
                }
            </div>
        )
    }
}

export default AllCountries;