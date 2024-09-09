import React from "react";
import { Link } from "react-router-dom";

import { Item } from "../types/types";
import { convertIntToMoney, getProductImage } from "../utils/utils";
import styles from "./CardItem.module.scss";

type CardItemProps = {
  item: Item;
};

function CardItem({ item }: CardItemProps) {
  const totalPrice = item.price.amount + item.price.decimals / 100;
  const formattedPrice = convertIntToMoney(totalPrice, item.price.currency);

  return (
    <li className={styles.cardItem}>
      <Link
        to={`/items/${item.id}-${item.sanitized_title}`}
        aria-label={`Ver detalhes do produto ${item.title}`}>
        <img
          srcSet={`${getProductImage(item.thumbnail_id, item.picture)} 1x, ${getProductImage(item.thumbnail_id, item.picture)}@2x 2x`}
          alt={`Imagem do produto ${item.title}`}
          width="90"
          height="90"
          loading="lazy"
        />
        <div className={styles.text}>
          <h2>{item.title}</h2>
          <p>{formattedPrice}</p>
          {item.free_shipping && (
            <p className={styles.freeShipping}>Envío gratis</p>
          )}
        </div>
      </Link>
    </li>
  );
}

export default CardItem;
