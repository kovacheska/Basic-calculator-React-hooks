import React from 'react';
import './Result.scss';

function Result(props) {
    return (
        <div className='result-container'>
            <p>{props.result}</p>
        </div>
    )
}

export default Result;