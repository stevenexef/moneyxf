import React, { useEffect, useState } from 'react';
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
  const [isLoading, setIsLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('token');
      const user = localStorage.getItem('user');
      setIsAuth(!!(token && user));
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>; // Or your loading component
  }

  const baseUrl = process.env.PUBLIC_URL || '/moneyxf';

  return (
    <Router basename={baseUrl}>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={isAuth ? <Navigate to="/dashboard" /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={isAuth ? <Navigate to="/dashboard" /> : <LoginForm setIsAuth={setIsAuth} />}
          />
          <Route
            path="/register"
            element={isAuth ? <Navigate to="/dashboard" /> : <RegisterForm />}
          />
          <Route path="/dashboard" element={isAuth ? <Dashboard /> : <Navigate to="/login" />} />
          <Route path="/budget" element={isAuth ? <Budget /> : <Navigate to="/login" />} />
          <Route
            path="/transactions"
            element={isAuth ? <Transactions /> : <Navigate to="/login" />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
