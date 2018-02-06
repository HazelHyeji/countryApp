import React from 'react';

const CountryList = ({name, flag, demonym}) => {
    return (
        <div>
            <div className="">
                <h2>{name}</h2>
                <img width="150" src={flag} />
                <p>{demonym}</p>
            </div>
        </div>
    );
}
export default CountryList;