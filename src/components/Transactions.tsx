import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

const Transactions: React.FC = () => {
  return (
    <div className="dashboard">
      <Sidebar activeTab="transactions" />
      <main className="main-content">
        <header className="content-header">
          <h1>Transactions</h1>
          <div className="user-menu">
            <button className="user-button">
              <span className="user-avatar">JD</span>
              <span className="user-name">John Doe</span>
            </button>
          </div>
        </header>
        <div className="dashboard-grid">
          <div className="dashboard-card transactions-list">
            <div className="card-header">
              <div className="transaction-filters">
                <select className="time-range">
                  <option>All Transactions</option>
                  <option>This Month</option>
                  <option>Last Month</option>
                  <option>Last 3 Months</option>
                </select>
                <select className="category-filter">
                  <option>All Categories</option>
                  <option>Housing</option>
                  <option>Food</option>
                  <option>Transportation</option>
                </select>
              </div>
            </div>
            <ul className="transaction-list detailed">
              {[...Array(8)].map((_, index) => (
                <li key={index}>
                  <div className="transaction-info">
                    <span className="transaction-icon shopping">
                      {index % 3 === 0 ? '🛒' : index % 3 === 1 ? '💰' : '🏠'}
                    </span>
                    <div>
                      <p className="transaction-title">
                        {index % 3 === 0
                          ? 'Grocery Store'
                          : index % 3 === 1
                            ? 'Salary Deposit'
                            : 'Rent Payment'}
                      </p>
                      <span className="transaction-date">Mar {index + 1}, 2024</span>
                    </div>
                  </div>
                  <div className="transaction-details">
                    <span className="transaction-category">
                      {index % 3 === 0 ? 'Food' : index % 3 === 1 ? 'Income' : 'Housing'}
                    </span>
                    <span className={`amount ${index % 3 === 1 ? 'positive' : ''}`}>
                      {index % 3 === 1 ? '+$2,500.00' : '-$' + (85 + index * 10).toFixed(2)}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Transactions;
