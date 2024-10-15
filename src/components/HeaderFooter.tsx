import React from 'react';
import './HeaderFooter.css';

// Header Component
const Header: React.FC = () => {
    return (
        <header className="app-header">
            <div className="logo-container">
                <h1 className="logo-text">Backend Proficiency Calculator</h1>
            </div>
            <nav className="navigation">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#features">Features</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

// Footer Component
const Footer: React.FC = () => {
    return (
        <footer className="app-footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Backend Proficiency Calculator. All rights reserved.</p>
                <ul className="footer-links">
                    <li><a href="#privacy">Privacy Policy</a></li>
                    <li><a href="#terms">Terms of Service</a></li>
                </ul>
            </div>
        </footer>
    );
};

export { Header, Footer };