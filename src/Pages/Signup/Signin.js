import React, { useState } from 'react'
// import Axios from 'axios'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup'

//Creating Schema to difine validations
const Schema = yup
  .object()
  .shape({
    fullname: yup.string().required(),
    Email: yup.string().email().required(),
    SetPassword: yup.string().min(4).max(8).required(),
    ConfirmPassword: yup.string().oneOf([yup.ref('SetPassword'), null])

  })

export const Signin = () => {


  //For Local Storage purpose
  const [SigninData, setSigninData] = useState([]);

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(Schema)
  })

  const submitForm = (data) => {
    console.log({ data });
    reset();

    // localStorage
    localStorage.setItem('SigninCredentials', JSON.stringify([...SigninData, data]));

    // Axios.post("http://localhost:3333/Signin", data)
    //   .then((Response) => {
    //     console.log(Response);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   })

  }


  return (
    <div className='formwrap'>
      <form name='SigninForm' id='Signin-id' onSubmit={handleSubmit(submitForm)} >
        <h2>Register</h2>
        <div>
          <label htmlFor="name">Full Name :</label>
          <input type="text" name='fullname' placeholder='Aman Soni' autoComplete='off' {...register("fullname")} />


        </div>
        <p>{errors.fullname?.message}</p>

        <div>
          <label htmlFor="email">Username :</label>
          <input type="email" name='Email' placeholder='abc@gmail.com' autoComplete='off' {...register("Email")} />
        </div>

        <p>{errors.Email?.message}</p>

        <div>
          <label htmlFor="password">Set Password :</label>
          <input type="password" name='SetPassword' {...register("SetPassword")} />
        </div>

        <p>{errors.SetPassword?.message}</p>

        <div>
          <label htmlFor="Confirm password">Confirm password :</label>
          <input type="password" name='ConfirmPassword' {...register("ConfirmPassword")} />
        </div>

        <p>{errors.ConfirmPassword && "Passwords should match!"}</p>

        <button>Sign-up</button>
      </form>
    </div>
  )
}
