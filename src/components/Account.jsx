import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Account = () => {
  const {user, logout} = UserAuth();

  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await logout();
      navigate('/');
      console.log('You are logged out!');
    } catch (e) {
      console.log(e.message)
    }
  }

  return (
    <div className='account-box'>
      <div className='account-container'>
        <h1>Welcome,</h1>
        <h1>{user && user.email}</h1>
        <button onClick={handleLogOut} className="account-button">Log out</button>
      </div>
    </div>
  )
}

export default Account