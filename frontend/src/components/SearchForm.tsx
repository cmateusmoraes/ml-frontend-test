import React from "react";

import styles from "./SearchForm.module.scss";

type SearchFormProps = {
  query: string;
  setQuery: (query: string) => void;
  handleSearch: (e: React.FormEvent) => void;
};

function SearchForm({ query, setQuery, handleSearch }: SearchFormProps) {
  return (
    <form
      className={styles.searchForm}
      role="search"
      aria-label="Formulario de búsqueda de productos"
      onSubmit={handleSearch}>
      <label htmlFor="search" className="visually-hidden">
        Buscar productos
      </label>
      <input
        id="search"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar productos..."
        aria-label="Campo de búsqueda de productos"
      />
      <button type="submit" aria-label="Buscar productos">
        <img src="/images/find.svg" alt="Buscar" width={16} height={21} />
      </button>
    </form>
  );
}

export default SearchForm;
