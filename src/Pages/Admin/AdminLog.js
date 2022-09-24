import React from 'react';
import './Login.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { Credentials } from './Credentials';
import { FiHome } from 'react-icons/fi';

const Schema = yup.object().shape({
    Username: yup.string().required("username is required"),
    Password: yup.string().min(4).max(10).required(),
});

export const AdminLog = () => {

    const history = useNavigate();

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(Schema),
    })

    const submitForm = (data) => {
        console.log(data);
        reset();
        {
            const getCredentials =
                Credentials.filter((item) =>
                    item.username === data.Username && item.Password === data.Password);
            if (getCredentials.length > 0) {
                localStorage.setItem('Logged-in', "SecretKey" );
                history('/AdminPannel');
            }
            else {
                alert("Invalid Credentials");
            }
        }
    }

    return (
        <div>
            <Link to={'/'} className="go-home"><FiHome/></Link>
            <div className='loginpage'>
            <div className='formwrap'>
                <form name='loginForm' id='login-id' onSubmit={handleSubmit(submitForm)}>
                    <h2>Login</h2>

                    <div>
                        <input type="text" name='Username' placeholder='Username' {...register("Username")} />
                    </div>

                    <p>{errors.Username?.message}</p>

                    <div>
                        <input type="password" name='Password' placeholder='Password' {...register("Password")} />
                    </div>

                    <p>{errors.Password?.message}</p>

                    <button >Sign-in</button>
                </form>
            </div>

        </div> </div>
    )
}
