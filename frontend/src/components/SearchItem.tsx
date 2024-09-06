import React from 'react';
import { Link } from 'react-router-dom';

type SearchItemProps = {
  item: {
    id: string;
    sanitized_title: string;
    picture: string;
    title: string;
    price: {
      currency: string;
      amount: number;
    };
  };
};

function SearchItem({ item }: SearchItemProps) {
  return (
    <li>
      <Link to={`/items/${item.id}-${item.sanitized_title}`} aria-label={`Ver detalhes do produto ${item.title}`}>
        <img src={item.picture} alt={`Imagem do produto ${item.title}`} />
        <p>{item.title}</p>
        <p>{item.price.currency} {item.price.amount}</p>
      </Link>
    </li>
  );
}

export default SearchItem;