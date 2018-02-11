import React from 'react';
import Country from '../Country';

const CountryList = props => (
  <div>
    {
            props.nations.map((nation, i) => (<Country
              key={nation.name}
              name={nation.name}
              flag={nation.flag}
              demonym={nation.demonym}
            />
          ))
  }
  </div>
);

export default CountryList;
