import React from 'react';
import { Link } from 'react-router-dom';
import './EmptyList.css';

export const EmptyList = () => {
    

    return (
        <div className='emptyList-wrap'>
            <h2>Ops!</h2>
            <h4> Sorry, unable to find the match</h4>
        </div>
    )
}
