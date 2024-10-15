import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProficiencyForm from './components/ProficiencyForm';
import DisplayPage from './components/DisplayPage';
import { Header, Footer } from './components/HeaderFooter';
import ThemeToggleButton from './components/ThemeToggleButton';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <ThemeToggleButton />
          <Routes>
            <Route path="/" element={<ProficiencyForm />} />
            <Route path="/display" element={<DisplayPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;