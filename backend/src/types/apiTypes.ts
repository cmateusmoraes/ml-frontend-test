export interface ApiItem {
  id: string;
  title: string;
  sanitized_title: string;
  currency_id: string;
  price: number;
  thumbnail_id: string;
  thumbnail: string;
  condition: string;
  shipping: {
    free_shipping: boolean;
  };
}

export interface ApiResponse {
  results: ApiItem[];
  filters: {
    id: string;
    values: {
      path_from_root: {
        name: string;
      }[];
    }[];
  }[];
}

export interface Item {
  id: string;
  title: string;
  sanitized_title: string;
  price: {
    currency: string;
    amount: number;
    decimals: number;
  };
  thumbnail_id: string;
  picture: string;
  condition: string;
  free_shipping: boolean;
}
