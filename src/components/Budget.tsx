import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

const Budget: React.FC = () => {
  return (
    <div className="dashboard">
      <Sidebar activeTab="budget" />
      <main className="main-content">
        <header className="content-header">
          <h1>Budget Planning</h1>
          <div className="user-menu">
            <button className="user-button">
              <span className="user-avatar">JD</span>
              <span className="user-name">John Doe</span>
            </button>
          </div>
        </header>
        <div className="dashboard-grid">
          <div className="budget-overview">
            <div className="dashboard-card highlight">
              <h3>Monthly Budget</h3>
              <p className="balance">$3,000.00</p>
              <div className="progress-bar">
                <div className="progress" style={{ width: '65%' }}></div>
              </div>
              <span className="budget-status">$1,050.00 remaining • 12 days left</span>
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
                    <div>
                      <h3>{category.name}</h3>
                      <p className="category-budget">
                        ${category.amount} <span>of ${category.max}</span>
                      </p>
                    </div>
                    <button className="edit-budget">Edit</button>
                  </div>
                  <div className="category-bar">
                    <div
                      className="bar"
                      style={{
                        width: `${(category.amount / category.max) * 100}%`,
                        backgroundColor: category.color,
                      }}
                    ></div>
                  </div>
                  <span className="budget-status">${category.max - category.amount} remaining</span>
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
