import React from 'react'
import './Login.css'

export const AdminLog = () => {
  return (
    <div><div className='loginpage'>
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
</div> </div>
  )
}
