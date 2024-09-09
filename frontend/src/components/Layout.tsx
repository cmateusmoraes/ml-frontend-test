import React, { useState } from "react";
import {
  Outlet,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

import Header from "./Header";

function Layout() {
  const [query, setQuery] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();

    if (query.trim() !== "") {
      setSearchParams({ search: query });
      if (location.pathname !== "/items") {
        navigate(`/items?search=${query}`);
      }
    }
  }

  function resetSearch() {
    setQuery("");
    setSearchParams({});
  }

  return (
    <>
      <Header
        query={query}
        setQuery={setQuery}
        handleSearch={handleSearch}
        resetSearch={resetSearch}
      />
      <Outlet />
    </>
  );
}

export default Layout;
