/**
 * AuthPage.jsx
**/

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser, registerUser } from '../api/authApi.js';
import './AuthPage.css';

function AuthPage({ onLoginSuccess }) {
  const [isLogin, setIsLogin] = useState(true);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleToggle = () => {
    setIsLogin(prev => !prev);
    setError('');
    setSuccessMsg('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMsg('');
    setLoading(true);

    try {
      if (isLogin) {
        const data = await loginUser(username, password);
        if (data.success) {
          onLoginSuccess(data.user);
          navigate('/profile');
        } else {
          setError(data.message || 'Invalid credentials');
        }
      }
      else {
        const data = await registerUser(username, password);

        if (data.success) {
          setSuccessMsg('Account created! You can now log in.');
          setIsLogin(true);
          setPassword('');
        }
        else {
          setError(data.message || 'Registration failed');
        }
      }
    } catch {
      setError('Cannot reach server. Is the backend running?');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-container">
      <div className="auth-card">
        <h2>{isLogin ? 'Login' : 'Register' }</h2>

        {error && <p className="auth-error">{error}</p>}
        {successMsg && <p className="auth-success">{successMsg}</p>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input 
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" disabled={loading}>
            {loading ? 'Please wait...' : (isLogin ? 'Login' : 'Register')}
          </button>
        </form>

        <div className="auth-toggle">
          {isLogin ? (
            <p>Don't have an account? 
              <button type="button" onClick={handleToggle}>Register</button>
            </p>
          ) : (
            <p>Already have an account?
              <button type="button" onClick={handleToggle}>Login</button>
            </p>
          )}
        </div>
        
      </div>
    </div>
  )
}

export default AuthPage;
