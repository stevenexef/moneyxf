import React from 'react';
import { Link } from 'react-router-dom';

interface LoginFormProps {
  setIsAuth: (auth: boolean) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ setIsAuth }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Set auth data
    localStorage.setItem('token', 'mock-token');
    localStorage.setItem(
      'user',
      JSON.stringify({
        name: 'John Doe',
        email: 'john@example.com',
        avatar: 'JD',
      })
    );

    // Update auth state and navigate
    setIsAuth(true);
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
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  // required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  // required
                />
              </div>
              <button type="submit">Sign in</button>
            </form>
            <div className="auth-form-footer">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Don't have an account? <Link to="/register">Sign up</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
