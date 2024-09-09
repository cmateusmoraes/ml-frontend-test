import React from "react";

import { Item } from "../types/types";
import CardItem from "./CardItem";

type SearchResultsProps = {
  items: Item[];
};

function SearchResults({ items }: SearchResultsProps) {
  return (
    <ol role="list">
      {items.map((item) => (
        <CardItem key={item.id} item={item} />
      ))}
    </ol>
  );
}

export default SearchResults;
