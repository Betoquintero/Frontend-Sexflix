import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function Navbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div>
      {user && <p>Hello {user.username}</p> }
      <div className="nav">
        <ul>
          <li><NavLink className={(element) => element.isActive ? 'selected' : 'links'} to="/">Home</NavLink></li>
          {!isLoggedIn && <li><NavLink className={(element) => element.isActive ? 'selected' : 'links'} to="/signup">Sign up</NavLink></li>}
          {!isLoggedIn && <li><NavLink className={(element) => element.isActive ? 'selected' : 'links'} to="/login">Login</NavLink></li>}
          {isLoggedIn && <li><NavLink className={(element) => element.isActive ? 'selected' : ''} to="/private">Private view</NavLink></li>}
          {isLoggedIn && <li><button onClick={() => logOutUser()}>Log out</button></li>}
          <li><button className='back-button' onClick={() => navigate(-1)}>Go back</button></li>
        </ul>
      </div>
    </div>
  )
}
