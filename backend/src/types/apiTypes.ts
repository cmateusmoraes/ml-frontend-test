// Interface para os itens da API
export interface ApiItem {
  id: string;
  title: string;
  sanitized_title: string;
  currency_id: string;
  price: number;
  thumbnail: string;
  condition: string;
  shipping: {
    free_shipping: boolean;
  };
}

// Interface para a resposta da API
export interface ApiResponse {
  results: ApiItem[];
}

// Interface para o tipo processado (final)
export interface Item {
  id: string;
  title: string;
  sanitized_title: string;
  price: {
    currency: string;
    amount: number;
    decimals: number;
  };
  picture: string;
  condition: string;
  free_shipping: boolean;
}
