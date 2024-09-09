import React, { lazy, Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import Loading from "./components/Loading";

const SearchPage = lazy(() => import("./pages/SearchPage"));
const ProductPage = lazy(() => import("./pages/ProductPage"));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<SearchPage />} />
            <Route path="/items" element={<SearchPage />} />
            <Route path="/items/:id" element={<ProductPage />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
