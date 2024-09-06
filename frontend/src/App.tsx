import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import ItemDetailsPage from './pages/ItemDetailsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/items/:id" element={<ItemDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
