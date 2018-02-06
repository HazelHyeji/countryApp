import React, { Component } from 'react';


const AllCountries = (props) => {
    return (
        <div>
            {
                props.nations.map((nation, i) => {
                    return (<CountryList
                        key={nation.name}
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