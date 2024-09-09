import React from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";

import Breadcrumb from "../components/Breadcrumb";
import ErrorContainer from "../components/ErrorContainer";
import Loading from "../components/Loading";
import ProductDetail from "../components/ProductDetail";
import { useFetch } from "../hooks/useFetch";
import { ItemDetails } from "../types/types";

function ProductPage() {
  const { id } = useParams<{ id: string }>();

  // Extract only the ID before the hyphen or use empty string as fallback
  const extractedId = id ? id.split("-")[0] : "";

  // Always call the hook, with the extracted ID
  const { data, error } = useFetch<{ item: ItemDetails }>(
    extractedId ? `/items/${extractedId}` : null,
  );

  if (!id) {
    return (
      <ErrorContainer>
        El ID del artículo no se proporcionó en la URL.
      </ErrorContainer>
    );
  }

  if (error)
    return (
      <ErrorContainer>
        Error al cargar los detalles del artículo.
      </ErrorContainer>
    );

  if (!data) return <Loading />;

  const { item } = data;

  return (
    <main>
      <Helmet>
        <title>{item.title} - Mercado Libre - Mateus Moraes</title>
        <meta
          name="description"
          content={`Compra ${item.title} en Mercado Libre. ¡Encuentra las mejores ofertas por ${item.title} en Mercado Livre Brasil!`}
        />
        <link rel="preload" href="/images/logo_large_25years.png" as="image" />
        <link rel="preload" href="/images/logo_small_25years.png" as="image" />
      </Helmet>

      {item.categories && item.categories.length > 0 && (
        <Breadcrumb categories={item.categories} />
      )}

      <ProductDetail item={item} />

      {/* Schema.org Markup for product */}
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
