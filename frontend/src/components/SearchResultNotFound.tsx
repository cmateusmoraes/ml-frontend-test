import React from "react";

import ErrorContainer from "./ErrorContainer";

function SearchResultNotFound() {
  return (
    <ErrorContainer>
      <h3>No hay anuncios que coincidan con tu búsqueda.</h3>
      <ul>
        <li>
          Revisa <strong>la ortografía</strong> de la palabra.
        </li>
        <li>
          Utilice <strong>palabras más genéricas </strong>o menos palabras.
        </li>
        <li>
          <a
            href="https://listado.mercadolibre.com.ar/categorias"
            target="_blank"
            rel="noreferrer">
            Explorar categorías
          </a>{" "}
          para encontrar un producto similar.
        </li>
      </ul>
    </ErrorContainer>
  );
}

export default SearchResultNotFound;
