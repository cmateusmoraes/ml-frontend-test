import React from "react";
import { useParams } from "react-router-dom";

import { useFetch } from "../hooks/useFetch";
import { ItemDetails } from "../types/types";

function ItemDetailsPage() {
  const { id } = useParams<{ id: string }>(); // Suponha que id seja string, não opcional

  // Extrair apenas o ID antes do hífen ou usar string vazia como fallback
  const extractedId = id ? id.split("-")[0] : "";

  // Chamada do hook sempre, com o ID extraído
  const { data, error } = useFetch<{ item: ItemDetails }>(
    extractedId ? `/items/${extractedId}` : null,
  );

  if (!id) {
    return <p role="alert">ID do item não foi fornecido na URL.</p>;
  }

  if (error) return <p role="alert">Erro ao carregar os detalhes do item.</p>;
  if (!data) return <p>Carregando...</p>;

  const { item } = data;

  return (
    <article aria-labelledby="item-title">
      <header>
        <h1 id="item-title">{item.title}</h1>
        <img
          src={item.picture}
          alt={`Imagem do produto ${item.title}`}
          width="300"
          height="300"
        />
      </header>

      <section aria-labelledby="item-price" role="contentinfo">
        <h2 id="item-price">Preço</h2>
        <p>
          {item.price.currency} {item.price.amount}
        </p>
      </section>

      <section aria-labelledby="item-description">
        <h2 id="item-description">Descrição do Produto</h2>
        <p>{item.description}</p>
      </section>

      <section aria-labelledby="item-details">
        <h2 id="item-details">Detalhes do Produto</h2>
        <p>Condição: {item.condition}</p>
        <p>Quantidade vendida: {item.sold_quantity}</p>
      </section>
    </article>
  );
}

export default ItemDetailsPage;
