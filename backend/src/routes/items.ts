import axios from "axios";
import * as express from "express";

import { config } from "../config";
import { ApiItem, ApiResponse, Item } from "../types/apiTypes";

const router = express.Router();
/**
 * @swagger
 * /api/items:
 *   get:
 *     summary: Search for items
 *     description: Retrieve a list of items from Mercado Libre based on a search query.
 *     parameters:
 *       - in: query
 *         name: q
 *         required: true
 *         description: Search query string
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A list of items
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 author:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                     lastname:
 *                       type: string
 *                 categories:
 *                   type: array
 *                   items:
 *                     type: string
 *                 items:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Item'
 *       400:
 *         description: Query is required
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Query is required"
 *       500:
 *         description: Error fetching items from external API
 */

// Route to search for items
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

    // Extract categories from the "category" filter
    const categories =
      response.data.filters
        .find((filter) => filter.id === "category")
        ?.values[0].path_from_root.map((category) => category.name) || [];

    // Maps results to the Item type
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
      categories,
      items,
    });
  } catch (error) {
    // Error communicating with ML API
    console.error(error);
    res.status(500).json({ message: "Error fetching items from external API" });
  }
});

/**
 * @swagger
 * /api/items/{id}:
 *   get:
 *     summary: Get item details by ID
 *     description: Retrieve detailed information about an item, including its description and categories.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the item to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Item details retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 author:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                     lastname:
 *                       type: string
 *                 item:
 *                   $ref: '#/components/schemas/ItemDetails'
 *       404:
 *         description: Item not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Item not found"
 *       500:
 *         description: Error fetching item details from external API
 */

// Route to item details by ID
router.get("/items/:id", async (req, res) => {
  const { id } = req.params;

  try {
    // Search item details and description
    const [itemResponse, descriptionResponse] = await Promise.all([
      axios.get(`${config.apiBaseUrl}/items/${id}`),
      axios.get(`${config.apiBaseUrl}/items/${id}/description`),
    ]);

    const item = itemResponse.data;
    const description = descriptionResponse.data.plain_text;

    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }

    // Search categories using the item's category_id
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
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      return res.status(404).json({ message: "Item not found" });
    }
    // Error fetching item details or categories
    console.error(error);
    res
      .status(500)
      .json({ message: "Error fetching item details from external API" });
  }
});

export default router;
