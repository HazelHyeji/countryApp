import React, { Component } from 'react';
import CountryList from '../CountryList/CountryList';

const AllCountries = (props) => {
    return (
        <div >
            {
                props.nations.map((nation, i) => {
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
export default AllCountries;