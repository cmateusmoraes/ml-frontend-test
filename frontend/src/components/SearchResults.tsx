import React from "react";

import SearchItem from "./SearchItem";

type SearchResultsProps = {
  items: {
    id: string;
    sanitized_title: string;
    picture: string;
    title: string;
    price: {
      currency: string;
      amount: number;
    };
  }[];
};

function SearchResults({ items }: SearchResultsProps) {
  return (
    <ul>
      {items.map((item) => (
        <SearchItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default SearchResults;
