import React from 'react';
import Sidebar from './Sidebar';

const Transactions: React.FC = () => {
  return (
    <div className="dashboard">
      <Sidebar activeTab="transactions" />
      <main className="main-content">
        <div className="welcome-container">
          <div className="welcome-content">
            <div className="welcome-text">
              <h1>Transactions</h1>
              <p>•</p>
              <p>Track your income and expenses</p>
            </div>
            <div className="date-display">
              <span className="current-date">
                {new Date().toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            </div>
          </div>
        </div>

        <div className="metrics-row">
          <div className="metric-card">
            <div className="metric-icon">💸</div>
            <div className="metric-data">
              <span className="metric-label">Total Expenses</span>
              <span className="metric-value">$2,850.00</span>
              <span className="metric-trend negative">+15.3% vs last month</span>
            </div>
          </div>
          <div className="metric-card">
            <div className="metric-icon">💰</div>
            <div className="metric-data">
              <span className="metric-label">Total Income</span>
              <span className="metric-value">$4,500.00</span>
              <span className="metric-trend positive">+8.2% vs last month</span>
            </div>
          </div>
          <div className="metric-card">
            <div className="metric-icon">💵</div>
            <div className="metric-data">
              <span className="metric-label">Net Flow</span>
              <span className="metric-value">+$1,650.00</span>
              <span className="metric-subtitle">This month</span>
            </div>
          </div>
        </div>

        <div className="dashboard-card transactions-list">
          <div className="card-header">
            <div className="header-left">
              <h2>All Transactions</h2>
              <span className="transaction-count">(245)</span>
            </div>
            <div className="transaction-filters">
              <select className="time-range">
                <option>All Time</option>
                <option>This Month</option>
                <option>Last Month</option>
                <option>Last 3 Months</option>
              </select>
              <select className="time-range">
                <option>All Categories</option>
                <option>Housing</option>
                <option>Food</option>
                <option>Transportation</option>
                <option>Entertainment</option>
                <option>Utilities</option>
              </select>
            </div>
          </div>
          <ul className="transaction-list detailed">
            {[
              {
                icon: '🛒',
                title: 'Grocery Store',
                date: 'Today, 2:30 PM',
                amount: -85.5,
                category: 'Food',
              },
              {
                icon: '💰',
                title: 'Salary Deposit',
                date: 'Mar 1, 2024',
                amount: 4500.0,
                category: 'Income',
              },
              {
                icon: '🏠',
                title: 'Rent Payment',
                date: 'Mar 1, 2024',
                amount: -1400.0,
                category: 'Housing',
              },
              {
                icon: '🚗',
                title: 'Gas Station',
                date: 'Feb 29, 2024',
                amount: -45.0,
                category: 'Transportation',
              },
              {
                icon: '🎬',
                title: 'Movie Tickets',
                date: 'Feb 28, 2024',
                amount: -32.0,
                category: 'Entertainment',
              },
              {
                icon: '💡',
                title: 'Electric Bill',
                date: 'Feb 28, 2024',
                amount: -95.0,
                category: 'Utilities',
              },
            ].map((transaction, index) => (
              <li key={index}>
                <div className="transaction-info">
                  <span className={`transaction-icon ${transaction.category.toLowerCase()}`}>
                    {transaction.icon}
                  </span>
                  <div className="transaction-details">
                    <p className="transaction-title">{transaction.title}</p>
                    <div className="transaction-meta">
                      <span className="transaction-date">{transaction.date}</span>
                      <span className="transaction-category">{transaction.category}</span>
                    </div>
                  </div>
                </div>
                <span className={`amount ${transaction.amount > 0 ? 'positive' : ''}`}>
                  {transaction.amount > 0 ? '+' : ''}
                  {transaction.amount.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                  })}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Transactions;
