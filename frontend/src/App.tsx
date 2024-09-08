import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import ItemDetailsPage from "./pages/ItemDetailsPage";
import SearchPage from "./pages/SearchPage";

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
