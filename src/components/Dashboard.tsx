/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

const Dashboard: React.FC = () => {
  // Calculate monthly spending percentage
  const monthlySpending = 1950;
  const monthlyBudget = 3000;
  const percentage = (monthlySpending / monthlyBudget) * 100;

  return (
    <div className="dashboard">
      <Sidebar activeTab="overview" />
      <main className="main-content">
        <div className="welcome-container">
          <div className="welcome-content">
            <div className="welcome-text">
              <h1>Welcome back, John</h1>
              <p>•</p>
              <p>Here's what's happening with your finances today</p>
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
          <div className="metric-card highlight">
            <div className="metric-icon">💰</div>
            <div className="metric-data">
              <span className="metric-label">Total Balance</span>
              <span className="metric-value">$5,240.00</span>
              <span className="metric-trend positive">+12.5% vs last month</span>
            </div>
          </div>
          <div className="metric-card">
            <div className="metric-icon">📊</div>
            <div className="metric-data">
              <span className="metric-label">Monthly Spending</span>
              <span className="metric-value">
                {monthlySpending.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                })}
              </span>
              <div className="metric-progress">
                <div className="progress-bar">
                  <div
                    className={`progress ${
                      percentage > 60 ? 'danger' : percentage > 30 ? 'warning' : ''
                    }`}
                    style={{ width: `${percentage}%` }}
                  >
                    <div className="progress-glow"></div>
                  </div>
                </div>
                <span
                  className={`progress-label ${
                    percentage > 60 ? 'danger' : percentage > 30 ? 'warning' : 'success'
                  }`}
                >
                  {percentage.toFixed(0)}% of{' '}
                  {monthlyBudget.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                  })}{' '}
                  budget
                </span>
              </div>
            </div>
          </div>
          <div className="metric-card">
            <div className="metric-icon">🎯</div>
            <div className="metric-data">
              <span className="metric-label">Savings Goal</span>
              <span className="metric-value">$12,580</span>
              <span className="metric-subtitle">of $15,000 target</span>
            </div>
          </div>
        </div>

        <div className="quick-actions">
          <button className="action-button">
            <span className="action-icon">➕</span>
            <span>Add</span>
          </button>
          <button className="action-button">
            <span className="action-icon">📊</span>
            <span>Budget</span>
          </button>
          <button className="action-button">
            <span className="action-icon">🎯</span>
            <span>Goals</span>
          </button>
          <button className="action-button">
            <span className="action-icon">📈</span>
            <span>Reports</span>
          </button>
        </div>

        <div className="dashboard-content">
          <div className="activity-card">
            <div className="card-header">
              <h2>Spending by Category</h2>
              <select className="time-range">
                <option>This Month</option>
                <option>Last Month</option>
                <option>Last 3 Months</option>
              </select>
            </div>
            <div className="category-list">
              <div className="spending-summary">
                <div className="summary-item">
                  <span className="summary-label">Total Spent</span>
                  <span className="summary-value">$2,650.00</span>
                </div>
                <div className="summary-item">
                  <span className="summary-label">Budget Left</span>
                  <span className="summary-value positive">$350.00</span>
                </div>
                <div className="summary-item">
                  <span className="summary-label">Daily Average</span>
                  <span className="summary-value">$88.33</span>
                </div>
              </div>
              {[
                { name: 'Housing', amount: 1400, total: 1500, color: '#4f46e5' },
                { name: 'Food', amount: 850, total: 1000, color: '#06b6d4' },
                { name: 'Transportation', amount: 400, total: 500, color: '#8b5cf6' },
              ].map((category) => (
                <div key={category.name} className="category-item">
                  <div className="category-info">
                    <span className="category-name">{category.name}</span>
                    <span className="category-amount">
                      ${category.amount.toLocaleString()}
                      <span className="category-total">/${category.total.toLocaleString()}</span>
                    </span>
                  </div>
                  <div className="category-bar">
                    <div
                      className="category-progress"
                      style={{
                        width: `${(category.amount / category.total) * 100}%`,
                        backgroundColor: category.color,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="transactions-card">
            <div className="card-header">
              <h2>Recent Transactions</h2>
              <select className="time-range">
                <option>Today</option>
                <option>Yesterday</option>
                <option>Last 7 Days</option>
              </select>
            </div>
            <ul className="transaction-list">
              {[
                {
                  icon: '🛒',
                  title: 'Grocery Store',
                  date: 'Today, 2:30 PM',
                  amount: -85.5,
                  category: 'Shopping',
                },
                {
                  icon: '💰',
                  title: 'Salary Deposit',
                  date: 'Mar 1, 2024',
                  amount: 2500.0,
                  category: 'Income',
                },
                {
                  icon: '🏠',
                  title: 'Rent Payment',
                  date: 'Mar 1, 2024',
                  amount: -1200.0,
                  category: 'Housing',
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
                  <span className={`amount ${transaction.amount > 0 ? 'positive' : 'negative'}`}>
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
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
