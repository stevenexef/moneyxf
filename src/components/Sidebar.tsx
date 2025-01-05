import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface SidebarProps {
  activeTab: 'overview' | 'transactions' | 'budget';
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleSignOut = () => {
    localStorage.clear();
    // Force a page reload to clear all states
    window.location.href = process.env.PUBLIC_URL ? `${process.env.PUBLIC_URL}/login` : '/login';
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="mobile-header">
        <button className="hamburger" onClick={toggleMenu}>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
        <div className="logo">
          <img
            src="https://assets.codepen.io/7773162/internal/avatars/users/default.png"
            alt="Logo"
          />
          <span className="logo-text">MoneyXF</span>
        </div>
      </div>

      <div className={`mobile-overlay ${isOpen ? 'open' : ''}`} onClick={toggleMenu}></div>

      <aside className="sidebar">
        <div className="sidebar-header">
          <div className="logo">
            <img
              src="https://assets.codepen.io/7773162/internal/avatars/users/default.png"
              alt="Logo"
            />
            <span className="logo-text">MoneyXF</span>
          </div>
        </div>
        <nav className="sidebar-nav">
          <Link to="/dashboard" className={`nav-item ${activeTab === 'overview' ? 'active' : ''}`}>
            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Overview
          </Link>
          <Link
            to="/transactions"
            className={`nav-item ${activeTab === 'transactions' ? 'active' : ''}`}
          >
            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Transactions
          </Link>
          <Link to="/budget" className={`nav-item ${activeTab === 'budget' ? 'active' : ''}`}>
            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
            Budget
          </Link>
        </nav>
        <div className="sidebar-footer">
          <button className="logout-button" onClick={handleSignOut}>
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      <nav className={`mobile-nav ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="logo">
            <img
              src="https://assets.codepen.io/7773162/internal/avatars/users/default.png"
              alt="Logo"
            />
            <span className="logo-text">MoneyXF</span>
          </div>
        </div>
        <div className="sidebar-nav">
          <Link to="/dashboard" className={`nav-item ${activeTab === 'overview' ? 'active' : ''}`}>
            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Overview
          </Link>
          <Link
            to="/transactions"
            className={`nav-item ${activeTab === 'transactions' ? 'active' : ''}`}
          >
            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Transactions
          </Link>
          <Link to="/budget" className={`nav-item ${activeTab === 'budget' ? 'active' : ''}`}>
            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
            Budget
          </Link>
        </div>
        <div className="sidebar-footer">
          <button className="logout-button" onClick={handleSignOut}>
            <span>Sign Out</span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
