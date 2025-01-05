/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LoginFormData } from '../types/auth.types';

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
  });
  const [error, setError] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      // Dummy credentials
      const dummyUser = {
        email: 'demo@example.com',
        password: 'demo123',
      };

      if (formData.email === dummyUser.email && formData.password === dummyUser.password) {
        // Clear any existing data
        localStorage.clear();

        // Set new auth data
        localStorage.setItem('token', 'mock-token');
        localStorage.setItem(
          'user',
          JSON.stringify({
            name: 'John Doe',
            email: dummyUser.email,
            avatar: 'JD',
          })
        );

        // Small delay to ensure localStorage is updated
        setTimeout(() => {
          navigate('/dashboard');
        }, 100);
      } else {
        setError('Invalid email or password. Try demo@example.com / demo123');
      }
    } catch (err) {
      setError('Failed to login. Please try again.');
      console.error('Login error:', err);
    }
  };

  return (
    <div className="login-page">
      <div className="login-content">
        <div className="login-left">
          <div className="logo">
            <img
              src="https://assets.codepen.io/7773162/internal/avatars/users/default.png"
              alt="Logo"
            />
            <span className="logo-text">MoneyXF</span>
          </div>
          <div className="login-text">
            <h1>Welcome back</h1>
            <p>Track your spending, set budgets, and achieve your financial goals.</p>
          </div>
        </div>
        <div className="login-right">
          <div className="auth-form">
            <h2>Sign in to your account</h2>
            {error && <div className="error">{error}</div>}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  required
                />
              </div>
              <button type="submit">Sign in</button>
            </form>
            <div className="auth-form-footer">
              Don't have an account? <Link to="/register">Sign up</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
