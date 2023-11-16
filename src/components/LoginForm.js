import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';  
import '../assets/style.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [cookies, setCookie] = useCookies(['user']);
  const navigate = useNavigate(); 

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === 'mark' && password === '5') {
      setCookie('user', { username });
      navigate('/dashboard');  
    } else {
      setError('Incorrect username or password');
    }
  };

  return (
    <div className="backOfLogin">
      <form id="loginForm">
        <h2 className="loginHeader">Login</h2>
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleLogin}>Login</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
};

export default LoginForm;
