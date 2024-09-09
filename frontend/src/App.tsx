import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import ItemDetailsPage from "./pages/ItemDetailsPage";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<SearchPage />} />
          <Route path="/items" element={<SearchPage />} />
          <Route path="/items/:id" element={<ItemDetailsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
