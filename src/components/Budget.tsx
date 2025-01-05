import React from 'react';
import { Link } from 'react-router-dom';
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

        <div className="budget-overview">
          <div className="dashboard-card highlight budget-summary">
            <h3>Monthly Budget Overview</h3>
            <p className="balance">$3,000.00</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: '65%' }}>
                <div className="progress-glow"></div>
              </div>
            </div>
            <div className="budget-meta">
              <span className="budget-status">$1,050.00 remaining</span>
              <span className="budget-period">12 days left</span>
            </div>
          </div>

          <div className="budget-categories">
            {[
              { name: 'Housing', amount: 1400, max: 1500, color: '#4f46e5' },
              { name: 'Food', amount: 850, max: 1000, color: '#06b6d4' },
              { name: 'Transportation', amount: 400, max: 500, color: '#8b5cf6' },
              { name: 'Entertainment', amount: 300, max: 400, color: '#ec4899' },
              { name: 'Utilities', amount: 200, max: 250, color: '#f59e0b' },
            ].map((category) => (
              <div key={category.name} className="dashboard-card budget-category">
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
      </main>
    </div>
  );
};

export default Budget;
