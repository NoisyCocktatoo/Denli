import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext'

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const {signIn} = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signIn(email, password);
      navigate('/account');
    } catch (e) {
      setError(e.message)
      console.log(e.message)
    }
  }


  return (
    <div className='Container'>
      <div className='View'>
          <h1>Welcome back,</h1>
          <h1>Traveller</h1>
      </div>
      <div className='MainContent'>
        <form className='Form'
        onSubmit={handleSubmit}>
          <div className='Header'>
            <h1>Log In Your</h1>
            <h1>Account</h1>
          </div>
          <div className='UIDivider'></div>
          <div className='field'>
            <label className='label'>Email</label>
            <input type="text" 
            className='input'
            name="password"
            placeholder="Name"
            onChange = {(e) => setEmail(e.target.value)}></input>
          </div>
          <div className='field'>
            <label className='label'>Password</label>
            <input type="password" 
            className='input'
             name="password"
             placeholder='Password'
             onChange = {(e) => setPassword(e.target.value)}></input>
          </div>
          <button className='button'>Log In</button>
        </form>
        <div className='route'>
          <Link to='/signup'><h2><u>New Traveller?<br></br> Sign Up here</u></h2></Link>
        </div>
      </div>
    </div>
  )
}

export default Login