import React from "react";
import { useSearchParams } from "react-router-dom";

import ErrorContainer from "../components/ErrorContainer";
import Loading from "../components/Loading";
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
      {error && (
        <ErrorContainer>
          Erro ao carregar os resultados da busca.
        </ErrorContainer>
      )}
      {!data && query && <Loading />}

      {data && data.items.length > 0 ? (
        <SearchResults items={data.items} />
      ) : (
        query && data && data.items.length === 0 && <SearchResultNotFound />
      )}
    </main>
  );
}

export default SearchPage;
