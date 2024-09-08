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
          <img
            src="/images/logo-mercadolivre-25-anos.png"
            alt="Logo Mercado Livre"
            width="134"
            height="34"
          />
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
