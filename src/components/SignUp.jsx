import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const SignUp = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const {createUser} = UserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await createUser(email, password);
            navigate('/')
        } catch (e) {
            setError(e.message);
            console.log(e.message);
        }
    }


  return (

        <div className='Container'>
            <div className='sign-up-MainContent'>
                <form className='sign-up-form'
                onSubmit={handleSubmit}>
                    <div className='sign-up-header'>
                        <h1>Sign Up</h1>
                        <h1>New Account</h1>
                    </div>
                    <div className='sign-up-UIDivider'></div>
                    <div className='sign-up-field'>
                        <label className='sign-up-label'>Email</label>
                        <input type="email" 
                        className='sign-up-input'
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}></input>
                    </div>
                    <div className='sign-up-field'>
                        <label className='sign-up-label'>Password</label>
                        <input type="password" 
                        className='sign-up-input'
                        placeholder='Password'
                        onChange={(e) => setPassword(e.target.value)}></input>
                    </div>
                    <button className='sign-up-button'>Sign Up</button>
                </form>
            <div className='sign-up-route'>
                <Link to='/'><h2><u>Already have an account? <br></br>Sign in Instead</u></h2></Link>
            </div>
            </div>
            <div className='sign-up-view'>
            <h1>Your Journey Awaits</h1>
            </div>
        </div>
  )
}

export default SignUp