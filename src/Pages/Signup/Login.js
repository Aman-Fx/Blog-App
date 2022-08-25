import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup'

//Creating Schema to difine validations
const Schema = yup
    .object()
    .shape({
        Email: yup.string().email().required(),
        SetPassword: yup.string().min(4).max(8).required(),
    })

export const Login = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(Schema)
    })

    const submitForm = (data) => {
        console.log(data);
        reset();
    }

    return (
        <div className='loginpage'>
            <div className='formwrap'>

                <form name='loginForm' id='login-id' onSubmit={handleSubmit(submitForm)} >
                    <h2>Login</h2>

                    <div>
                        <label htmlFor="email">Email :</label>
                        <input type="email" name='Email' placeholder='abc@gmail.com' {...register("Email")} />
                    </div>

                    <p>{errors.Email?.message}</p>

                    <div>
                        <label htmlFor="password">Password :</label>
                        <input type="password" name='SetPassword'  {...register("SetPassword")} />
                    </div>

                    <p>{errors.SetPassword?.message}</p>

                    <button >Sign-in</button>
                </form>
            </div>
            <h4 className='Link'>
                <Link to={'/Signin'} >Add a new account</Link></h4>
        </div>
    )
}
