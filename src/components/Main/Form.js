import React from 'react';

const Form = (props) => {
    return(
        <div>
            <form>
                <input type="text" placeholder="Search Countries!"/>
                <input type="submit"/>
                <button onClick={props.countryClickHandler}>All Countries</button>
                <button>Quiz</button>
            </form>
        </div>
    )
}

export default Form;