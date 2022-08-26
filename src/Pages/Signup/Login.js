import React from 'react'
import { Link, useNavigate} from 'react-router-dom'
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

    //New version of usehistory hook to navigate to the add content page
    const history = useNavigate();
    
    //Yup methods-->
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(Schema)
    })

    const submitForm = (data) => {
        console.log(data);
        reset();

        // to match the credentials
        const getusercred = localStorage.getItem("SigninCredentials");
        // console.log(getusercred);

        if (getusercred && getusercred.length) {
            const userdata = JSON.parse(getusercred);
            const userlogin = userdata.filter((element, key) =>
                element.Email === data.Email && element.SetPassword === data.SetPassword
            );
            // console.log(userlogin);

            if (userlogin.length === 0) {
                alert('Invalid Credentials');
            }
            else{
                console.log("Login Succesfull");

                //Set this details to the localstorage
                localStorage.setItem('UserLogin',JSON.stringify(userlogin))

                //Visting to the Add content page
                history('/AddBlog');

            }
        } 
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
