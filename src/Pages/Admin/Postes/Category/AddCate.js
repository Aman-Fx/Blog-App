import React from 'react';
import { useState, useEffect } from 'react';
import { EmptyList } from '../../../../Components/Comman/EmptyList/EmptyList';
import { SideBar } from '../../SideBar/SideBar';
import '../AllPost.css';

export const AddCate = () => {

    const [isValid, setIsValid] = useState(false);

    //Only accessible if user is looged in.
    const ShowError = () => {
        const getuser = localStorage.getItem('Logged-in');
        if ( getuser && getuser.length) {
            setIsValid(true);
        }
    }
    useEffect(() => {
        ShowError();
    }, [])

    return (
        <div>
            {isValid ?
                <div className='outer-container'>
                    <div className='side-container' ><SideBar /> </div>
                    <div className='content'> HHELOOOOOOO </div>
                </div> :
                <EmptyList />}
        </div>
    )
}
