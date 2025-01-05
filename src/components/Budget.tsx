import React from 'react';
import Sidebar from './Sidebar';

const Budget: React.FC = () => {
  return (
    <div className="dashboard">
      <Sidebar activeTab="budget" />
      <main className="main-content">
        <div className="welcome-container">
          <div className="welcome-content">
            <div className="welcome-text">
              <h1>Budget Planning</h1>
              <p>•</p>
              <p>Manage your monthly budgets and spending limits</p>
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
              <span className="metric-label">Monthly Budget</span>
              <span className="metric-value">$3,000.00</span>
              <div className="metric-progress">
                <div className="progress-bar">
                  <div className="progress" style={{ width: '65%' }}>
                    <div className="progress-glow"></div>
                  </div>
                </div>
                <span className="progress-label">$1,050.00 remaining • 12 days left</span>
              </div>
            </div>
          </div>
          <div className="metric-card">
            <div className="metric-icon">📊</div>
            <div className="metric-data">
              <span className="metric-label">Total Spent</span>
              <span className="metric-value">$1,950.00</span>
              <span className="metric-trend negative">+12.5% vs last month</span>
            </div>
          </div>
          <div className="metric-card">
            <div className="metric-icon">🎯</div>
            <div className="metric-data">
              <span className="metric-label">Budget Health</span>
              <span className="metric-value">Good</span>
              <span className="metric-subtitle">On track with 5 categories</span>
            </div>
          </div>
        </div>

        <div className="budget-overview">
          <div className="dashboard-card">
            <div className="card-header">
              <div className="header-left">
                <h2>Budget Categories</h2>
                <span className="transaction-count">(5 Active)</span>
              </div>
              <button className="action-button">
                <span className="action-icon">➕</span>
                <span>Add Category</span>
              </button>
            </div>
            <div className="budget-categories">
              {[
                { name: 'Housing', amount: 1400, max: 1500, color: '#4f46e5' },
                { name: 'Food', amount: 850, max: 1000, color: '#06b6d4' },
                { name: 'Transportation', amount: 400, max: 500, color: '#8b5cf6' },
                { name: 'Entertainment', amount: 300, max: 400, color: '#ec4899' },
                { name: 'Utilities', amount: 200, max: 250, color: '#f59e0b' },
              ].map((category) => (
                <div key={category.name} className="budget-category">
                  <div className="category-header">
                    <div className="category-info">
                      <h3>{category.name}</h3>
                      <p className="category-budget">
                        <span className="amount-spent">${category.amount.toLocaleString()}</span>
                        <span className="amount-total">of ${category.max.toLocaleString()}</span>
                      </p>
                    </div>
                    <button className="edit-budget">Edit</button>
                  </div>
                  <div className="category-bar">
                    <div
                      className="category-progress"
                      style={{
                        width: `${(category.amount / category.max) * 100}%`,
                        backgroundColor: category.color,
                      }}
                    ></div>
                  </div>
                  <span className="remaining-budget">
                    ${(category.max - category.amount).toLocaleString()} remaining
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Budget;
