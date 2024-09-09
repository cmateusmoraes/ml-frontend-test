import React from "react";
import { useSearchParams } from "react-router-dom";

import SearchResultNotFound from "../components/SearchResultNotFound";
import SearchResults from "../components/SearchResults";
import { useFetch } from "../hooks/useFetch";
import { ItemDetails } from "../types/types";

function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search") || "";

  const { data, error } = useFetch<{ items: ItemDetails[] }>(
    query ? `/items?q=${query}` : null,
  );

  return (
    <main role="main" aria-live="polite">
      {error && <p role="alert">Erro ao carregar os resultados</p>}
      {!data && query && <p>Carregando...</p>}

      {data && data.items.length > 0 ? (
        <SearchResults items={data.items} />
      ) : (
        query && data && data.items.length === 0 && <SearchResultNotFound />
      )}
    </main>
  );
}

export default SearchPage;
