import React from 'react';
import { Link } from 'react-router-dom';
const Buttons = (props) => {
    return (
        <div>
            <Link to="/quiz"><button value="quiz">Quiz</button></Link>
        </div>
    )
}

export default Buttons;