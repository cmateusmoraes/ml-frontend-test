import React from "react";

import { ItemDetails } from "../types/types";
import { convertIntToMoney } from "../utils/utils";
import styles from "./ProductDetail.module.scss";

type ProductDetailProps = {
  item: ItemDetails;
};

function ProductDetail({ item }: ProductDetailProps) {
  return (
    <article className={styles.productDetail} role="article">
      <div className={styles.image}>
        <img
          src={item.picture}
          alt={`Imagen del producto ${item.title}`}
          width="300"
          height="300"
          role="img"
          aria-labelledby="item-title"
        />
        <section aria-labelledby="item-description">
          <h2 id="item-description">Descripción del Producto</h2>
          <p>{item.description}</p>
        </section>
      </div>

      <div className={styles.content}>
        <div className={styles.info}>
          <p className={styles.condition} aria-label="Condición del producto">
            {item.condition === "new" ? "Nuevo" : "Usado"}
          </p>
          <h1 id="item-title" aria-label="Título del producto">
            {item.title}
          </h1>
          <p className={styles.price} aria-label="Precio del producto">
            {convertIntToMoney(
              item.price.amount,
              item.price.decimals,
              item.price.currency,
            )}
          </p>
          <button aria-label="Comprar el producto ahora">Comprar ahora</button>
        </div>
      </div>
    </article>
  );
}

export default ProductDetail;
