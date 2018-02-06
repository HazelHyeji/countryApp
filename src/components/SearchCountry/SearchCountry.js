import React from 'react';

const SearchForm = (props) => {
    return(
        <div>
            <form>
                <input 
                    type="text" 
                    placeholder="Search Countries!" 
                    onChange={props.onSearchChange}
                />
            </form>
        </div>
    )
}

export default SearchForm;