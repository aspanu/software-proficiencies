import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProficiencyForm from './components/ProficiencyForm';
import DisplayPage from './components/DisplayPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProficiencyForm />} />
        <Route path="/display" element={<DisplayPage />} />
      </Routes>
    </Router>
  );
};

export default App;