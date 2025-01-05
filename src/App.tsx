import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Dashboard from './components/Dashboard';
import Budget from './components/Budget';
import Transactions from './components/Transactions';
import './styles/variables.css';
import './styles/base.css';
import './styles/auth.css';
import './styles/sidebar.css';
import './styles/dashboard.css';
import './styles/budget.css';
import './styles/transactions.css';
import './App.css';

const App: React.FC = () => {
  // Check both token and user data
  const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    return !!(token && user);
  };

  return (
    <Router basename="/moneyxf">
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={isAuthenticated() ? <Navigate to="/dashboard" /> : <Navigate to="/login" />}
          />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route
            path="/dashboard"
            element={isAuthenticated() ? <Dashboard /> : <Navigate to="/login" />}
          />
          <Route
            path="/budget"
            element={isAuthenticated() ? <Budget /> : <Navigate to="/login" />}
          />
          <Route
            path="/transactions"
            element={isAuthenticated() ? <Transactions /> : <Navigate to="/login" />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
