import React from 'react';

const Form = (props) => {
    return(
        <div>
            <form>
                <input type="text" placeholder="Search Countries!"/>
                <input type="submit"/>
                <button onClick={props.buttonClickHandler} value="allCountries">All Countries</button>
                <button onClick={props.buttonClickHandler} value="quiz">Quiz</button>
            </form>
        </div>
    )
}

export default Form;