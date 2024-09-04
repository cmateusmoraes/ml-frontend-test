import * as express from 'express';
import axios from 'axios';
import { config } from '../src/config';

const router = express.Router();

// Rota para busca de itens
router.get('/items', async (req, res) => {
    const query = req.query.q;
    if (!query) {
        return res.status(400).json({ message: 'Query is required' });
    }

    try {
        const response = await axios.get(`${config.apiBaseUrl}/sites/MLA/search?q=${query}`);

        // Verifica se há resultados
        if (!response.data.results || response.data.results.length === 0) {
            return res.status(200).json({
                author: { name: 'Mateus', lastname: 'Moraes' },
                items: []
            });
        }

        // Mapeia os resultados
        const items = response.data.results.map((item: any) => ({
            id: item.id,
            title: item.title,
            price: {
                currency: item.currency_id,
                amount: Math.floor(item.price),
                decimals: item.price % 1,
            },
            picture: item.thumbnail,
            condition: item.condition,
            free_shipping: item.shipping.free_shipping,
        }));

        res.json({
            author: {
                name: 'Mateus',
                lastname: 'Moraes',
            },
            items,
        });
    } catch (error) {
        // Erro de comunicação com a API do Mercado Livre
        console.error(error);
        res.status(500).json({ message: 'Error fetching items from external API' });
    }
});

// Rota para detalhes do item por ID
router.get('/items/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const itemResponse = await axios.get(`${config.apiBaseUrl}/items/${id}`);
        const descriptionResponse = await axios.get(`${config.apiBaseUrl}/items/${id}/description`);

        const item = itemResponse.data;
        const description = descriptionResponse.data.plain_text;

        // Se o item não existir
        if (!item) {
            return res.status(404).json({ message: 'Item not found' });
        }

        res.json({
            author: {
                name: 'Mateus',
                lastname: 'Moraes',
            },
            item: {
                id: item.id,
                title: item.title,
                price: {
                    currency: item.currency_id,
                    amount: Math.floor(item.price),
                    decimals: item.price % 1,
                },
                picture: item.pictures[0].url,
                condition: item.condition,
                free_shipping: item.shipping.free_shipping,
                sold_quantity: item.sold_quantity,
                description,
            },
        });
    } catch (error) {
        // Erro ao buscar detalhes do item
        console.error(error);
        res.status(500).json({ message: 'Error fetching item details from external API' });
    }
});

export default router;