import React from "react";
import { Link } from "react-router-dom";

import styles from "./Header.module.scss";
import SearchForm from "./SearchForm";

type HeaderProps = {
  query: string;
  setQuery: (query: string) => void;
  handleSearch: (e: React.FormEvent) => void;
  resetSearch: () => void;
};

function Header({ query, setQuery, handleSearch, resetSearch }: HeaderProps) {
  return (
    <header className={styles.mlHeader} role="banner">
      <nav aria-label="Main navigation">
        <Link
          to="/"
          aria-label="Voltar para a página inicial"
          onClick={resetSearch}>
          <picture>
            <source
              media="(max-width: 768px)"
              srcSet="/images/logo_small_25years.png"
              width="89"
              height="65"
            />
            <img
              src="/images/logo_large_25years.png"
              alt="Logo Mercado Livre"
              width="134"
              height="34"
            />
          </picture>
        </Link>
        <SearchForm
          query={query}
          setQuery={setQuery}
          handleSearch={handleSearch}
        />
      </nav>
    </header>
  );
}

export default Header;
