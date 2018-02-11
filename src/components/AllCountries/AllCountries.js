import React, { Component } from 'react';
import CountryList from '../CountryList/CountryList';
import SearchCounrty from '../SearchCountry/SearchCountry';

const AllCountries = (props) => {
  console.log(props.nations);
  //   const filteredCountry = props.nations.filter(nation => nation.name.toLowerCase().includes(props.searchfield.toLowerCase()));
  return (
    <div>
      <SearchCounrty onSearchChange={props.onSearchChange} />

    </div>
  );
};
export default AllCountries;
