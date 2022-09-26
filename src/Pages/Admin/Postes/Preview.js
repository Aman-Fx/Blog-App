import axios from '../../../Components/Comman/FetchData/Api';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Blog } from '../../Blog/Blog';
import './Preview.css';
import { FiHome } from 'react-icons/fi';
import { EmptyList } from '../../../Components/Comman/EmptyList/EmptyList';

export const Preview = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [isValid, setIsValid] = useState(false);

    //For deletion
    const DeletePost = () => {
        axios.delete(`/BlogDb/${id}`);
        navigate(-1);
        alert("Post Deleted");
    }
    //Only accessible if user is looged in.
    const ShowError = () => {
        const getuser = localStorage.getItem('Logged-in');
        if (getuser && getuser.length) {
            setIsValid(true);
        }
    }
    useEffect(() => {
        ShowError();
    }, [])


    return (<div> {isValid ?
        <div className='delete-post'>
            <Blog />
            <button onClick={DeletePost}>Delete Post</button>
        </div> : <div> <Link to={'/'} className="go-home"><FiHome /></Link>
            <EmptyList /> </div>}
    </div>
    )
}
