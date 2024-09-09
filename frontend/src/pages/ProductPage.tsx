import React from "react";
import { useParams } from "react-router-dom";

import Breadcrumb from "../components/Breadcrumb";
import ErrorContainer from "../components/ErrorContainer";
import Loading from "../components/Loading";
import ProductDetail from "../components/ProductDetail";
import { useFetch } from "../hooks/useFetch";
import { ItemDetails } from "../types/types";

function ProductPage() {
  const { id } = useParams<{ id: string }>();

  // Extrair apenas o ID antes do hífen ou usar string vazia como fallback
  const extractedId = id ? id.split("-")[0] : "";

  // Chamada do hook sempre, com o ID extraído
  const { data, error } = useFetch<{ item: ItemDetails }>(
    extractedId ? `/items/${extractedId}` : null,
  );

  if (!id) {
    return (
      <ErrorContainer>ID do item não foi fornecido na URL.</ErrorContainer>
    );
  }

  if (error)
    return (
      <ErrorContainer>Erro ao carregar os detalhes do item.</ErrorContainer>
    );

  if (!data) return <Loading />;

  const { item } = data;

  return (
    <main>
      {item.categories && item.categories.length > 0 && (
        <Breadcrumb categories={item.categories} />
      )}

      <ProductDetail item={item} />

      {/* Schema.org Markup para o Produto */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            name: item.title,
            image: item.picture,
            description: item.description,
            offers: {
              "@type": "Offer",
              priceCurrency: item.price.currency,
              price: `${item.price.amount}.${item.price.decimals}`,
              availability: "https://schema.org/InStock",
              url: window.location.href,
            },
          }),
        }}
      />
    </main>
  );
}

export default ProductPage;
