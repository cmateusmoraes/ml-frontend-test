import React from "react";
import { Link } from "react-router-dom";

import { Item } from "../types/types";
import { convertIntToMoney, getProductImage } from "../utils/utils";
import styles from "./CardItem.module.scss";

type CardItemProps = {
  item: Item;
};

function CardItem({ item }: CardItemProps) {
  return (
    <li className={styles.cardItem}>
      <Link
        to={`/items/${item.id}-${item.sanitized_title}`}
        aria-label={`Ver detalles del producto ${item.title}`}>
        <img
          src={getProductImage(item.thumbnail_id, item.picture)}
          alt={`Imagen del producto ${item.title}`}
          width="90"
          height="90"
          loading="lazy"
        />
        <div className={styles.text}>
          <h2>{item.title}</h2>
          <p>
            {convertIntToMoney(
              item.price.amount,
              item.price.decimals,
              item.price.currency,
            )}
          </p>
          {item.free_shipping && (
            <p className={styles.freeShipping}>Envío gratis</p>
          )}
        </div>
      </Link>
    </li>
  );
}

export default CardItem;
