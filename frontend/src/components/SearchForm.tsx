import React from 'react';

import styles from './SearchForm.module.scss';

type SearchFormProps = {
  query: string;
  setQuery: (query: string) => void;
  handleSearch: (e: React.FormEvent) => void;
};

function SearchForm({ query, setQuery, handleSearch }: SearchFormProps) {
  return (
    <form className={styles.searchForm} role="search" aria-label="Formulário de busca de produtos" onSubmit={handleSearch}>
      <label htmlFor="search" className="visually-hidden">
        Buscar produtos
      </label>
      <input
        id="search"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar produtos..."
        aria-label="Campo de busca de produtos"
      />
      <button type="submit" aria-label="Buscar produtos">
        <img src="/images/find.svg" alt="Buscar" width={16} height={21} />
      </button>
    </form>
  );
}

export default SearchForm;