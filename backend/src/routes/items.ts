import axios from "axios";
import * as express from "express";

import { config } from "../config";
import { ApiItem, ApiResponse, Item } from "../types/apiTypes";

const router = express.Router();

// Rota para busca de itens
router.get("/items", async (req, res) => {
  const query = req.query.q;

  if (!query) {
    return res.status(400).json({ message: "Query is required" });
  }

  try {
    const response = await axios.get<ApiResponse>(
      `${config.apiBaseUrl}/sites/MLA/search?q=${query}&limit=4`,
    );

    if (!response.data.results || response.data.results.length === 0) {
      return res.status(200).json({
        author: { name: "Mateus", lastname: "Moraes" },
        categories: [],
        items: [],
      });
    }

    // Extrair as categorias do filtro "category"
    const categories =
      response.data.filters
        .find((filter) => filter.id === "category")
        ?.values[0].path_from_root.map((category) => category.name) || [];

    // Mapeia os resultados com o tipo Item
    const items: Item[] = response.data.results.map(
      (item: ApiItem): Item => ({
        id: item.id,
        title: item.title,
        sanitized_title: item.sanitized_title,
        price: {
          currency: item.currency_id,
          amount: Number.isFinite(item.price) ? Math.floor(item.price) : 0,
          decimals: Number.isFinite(item.price)
            ? Math.round((item.price % 1) * 100)
            : 0,
        },
        thumbnail_id: item.thumbnail_id,
        picture: item.thumbnail,
        condition: item.condition,
        free_shipping: item.shipping.free_shipping,
      }),
    );

    res.json({
      author: {
        name: "Mateus",
        lastname: "Moraes",
      },
      categories, // Retornar as categorias extraídas
      items,
    });
  } catch (error) {
    // Erro de comunicação com a API ML
    console.error(error);
    res.status(500).json({ message: "Error fetching items from external API" });
  }
});

// Rota para detalhes do item por ID
// Rota para detalhes do item por ID
router.get("/items/:id", async (req, res) => {
  const { id } = req.params;

  try {
    // Busca detalhes do item e descrição
    const [itemResponse, descriptionResponse] = await Promise.all([
      axios.get(`${config.apiBaseUrl}/items/${id}`),
      axios.get(`${config.apiBaseUrl}/items/${id}/description`),
    ]);

    const item = itemResponse.data;
    const description = descriptionResponse.data.plain_text;

    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }

    // Busca as categorias usando o category_id do item
    const categoriesResponse = await axios.get(
      `${config.apiBaseUrl}/categories/${item.category_id}`,
    );
    const categories = categoriesResponse.data.path_from_root.map(
      (category: { name: string }) => category.name,
    );

    res.json({
      author: {
        name: "Mateus",
        lastname: "Moraes",
      },
      item: {
        id: item.id,
        title: item.title,
        sanitized_title: item.sanitized_title,
        price: {
          currency: item.currency_id,
          amount: Math.floor(item.price),
          decimals: item.price % 1,
        },
        thumbnail_id: item.thumbnail_id,
        picture: item.pictures[0].url,
        condition: item.condition,
        free_shipping: item.shipping.free_shipping,
        sold_quantity: item.sold_quantity,
        description,
        categories,
      },
    });
  } catch (error) {
    // Erro ao buscar detalhes do item ou categorias
    console.error(error);
    res
      .status(500)
      .json({ message: "Error fetching item details from external API" });
  }
});

export default router;
