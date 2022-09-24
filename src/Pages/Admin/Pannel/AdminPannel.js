import React, { useState } from 'react';
import { useEffect } from 'react';
import { FiHome } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { EmptyList } from '../../../Components/Comman/EmptyList/EmptyList';
import { SideBar } from '../SideBar/SideBar';

export const AdminPannel = () => {
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
                    <div className='content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non culpa cupiditate repellendus ea doloribus. Nisi iure iste voluptatibus enim quae nesciunt voluptates quasi, quo dolore ut, nobis illum, error perferendis? Quam in recusandae minima id beatae aliquam, quibusdam eius cupiditate explicabo facere dolore minus dolor amet, fuga nulla cum ad esse optio doloribus nihil accusamus velit unde eum. Itaque deserunt natus temporibus exercitationem libero hic. Odio vero quidem libero cumque quod beatae nihil deserunt animi soluta maxime tempora, quaerat eveniet accusamus debitis quas, distinctio optio est et quia dolorem ducimus velit cum dolores. Odit facilis natus tempora totam quas eius. </div>
                </div> :
                <div> <Link to={'/'} className="go-home"><FiHome/></Link>
                <EmptyList />
                </div>}
        </div>
    )
}
