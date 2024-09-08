import React, { useState } from "react";

import Header from "../components/Header";
import SearchResultNotFound from "../components/SearchResultNotFound";
import SearchResults from "../components/SearchResults";
import { useFetch } from "../hooks/useFetch";
import { ItemDetails } from "../types/types"; // Importa o novo componente

function SearchPage() {
  const [query, setQuery] = useState("");
  const [searchUrl, setSearchUrl] = useState<string | null>(null);

  const { data, error } = useFetch<{ items: ItemDetails[] }>(
    searchUrl ? `/items?q=${searchUrl}` : null,
  );

  function resetSearch() {
    setQuery("");
    setSearchUrl(null);
  }

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();

    if (query.trim() !== "") {
      setSearchUrl(query);
    }
  }

  return (
    <div>
      <Header
        query={query}
        setQuery={setQuery}
        handleSearch={handleSearch}
        resetSearch={resetSearch}
      />

      <main role="main" aria-live="polite">
        {error && <p role="alert">Erro ao carregar os resultados</p>}
        {!data && searchUrl && <p>Carregando...</p>}

        {data && data.items.length > 0 ? (
          <SearchResults items={data.items} />
        ) : (
          searchUrl &&
          data &&
          data.items.length === 0 && <SearchResultNotFound />
        )}
      </main>
    </div>
  );
}

export default SearchPage;
