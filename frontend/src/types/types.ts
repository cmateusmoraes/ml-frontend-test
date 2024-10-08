export interface Item {
  id: string;
  title: string;
  sanitized_title: string;
  price: {
    currency: string;
    amount: number;
    decimals: number;
  };
  categories: string[];
  thumbnail_id: string;
  picture: string;
  condition: string;
  free_shipping: boolean;
}

export interface ItemDetails extends Item {
  sold_quantity: number;
  description: string;
}
