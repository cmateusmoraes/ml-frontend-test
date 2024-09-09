import { Express } from "express";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Documentation",
      version: "1.0.0",
      description: "API for Mercado Libre items search - Mateus Moraes",
    },
    servers: [
      {
        url: "http://localhost:3000", // URL base API
      },
    ],
    components: {
      schemas: {
        Item: {
          type: "object",
          properties: {
            id: {
              type: "string",
            },
            title: {
              type: "string",
            },
            sanitized_title: {
              type: "string",
            },
            price: {
              type: "object",
              properties: {
                currency: {
                  type: "string",
                },
                amount: {
                  type: "number",
                },
                decimals: {
                  type: "number",
                },
              },
            },
            thumbnail_id: {
              type: "string",
            },
            picture: {
              type: "string",
            },
            condition: {
              type: "string",
            },
            free_shipping: {
              type: "boolean",
            },
          },
        },
        ItemDetails: {
          allOf: [
            { $ref: "#/components/schemas/Item" },
            {
              type: "object",
              properties: {
                sold_quantity: {
                  type: "number",
                },
                description: {
                  type: "string",
                },
                categories: {
                  type: "array",
                  items: {
                    type: "string",
                  },
                },
              },
            },
          ],
        },
      },
    },
  },
  apis: ["./src/routes/*.ts"], // Path to files containing routes with Swagger comments
};

const swaggerSpec = swaggerJsdoc(options);

export function setupSwagger(app: Express) {
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}
