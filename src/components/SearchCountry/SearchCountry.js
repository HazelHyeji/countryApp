import React from 'react';

const SearchForm = props => (
  <div>
    <form>
      <input
              type="text"
              placeholder="Search Countries!"
              onChange={props.onSearchChange}
            />
      <input type="submit" value="Search" />
    </form>
  </div>
);

export default SearchForm;
