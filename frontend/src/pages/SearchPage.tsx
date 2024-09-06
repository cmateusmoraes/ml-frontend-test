import React, { useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import Header from '../components/Header';
import SearchResults from '../components/SearchResults';
import SearchResultNotFound from '../components/SearchResultNotFound'; // Importa o novo componente

function SearchPage() {
  const [query, setQuery] = useState('');
  const [searchUrl, setSearchUrl] = useState<string | null>(null);

  const { data, error } = useFetch<{ items: any[] }>(searchUrl ? `/items?q=${searchUrl}` : null);

  const resetSearch = () => {
    setQuery('');
    setSearchUrl(null);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    if (query.trim() !== '') {
      setSearchUrl(query);
    }
  };

  return (
    <div>
      <Header query={query} setQuery={setQuery} handleSearch={handleSearch} resetSearch={resetSearch} />

      <main role="main" aria-live="polite">
        {error && <p role="alert">Erro ao carregar os resultados</p>}
        {!data && searchUrl && <p>Carregando...</p>}

        {data && data.items.length > 0 ? (
          <SearchResults items={data.items} />
        ) : (
          searchUrl && data && data.items.length === 0 && (
            <SearchResultNotFound />
          )
        )}
      </main>
    </div>
  );
}

export default SearchPage;
