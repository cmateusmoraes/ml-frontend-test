import request from "supertest";

import app from "../src/app";

let validItemId: string;

describe("GET /api/items", () => {
  it("should return 400 if no query is provided", async () => {
    const res = await request(app).get("/api/items");

    expect(res.status).toBe(400);
    expect(res.body.message).toBe("Query is required");
  });

  it("should return items if query is provided", async () => {
    const res = await request(app).get("/api/items").query({ q: "laptop" });

    expect(res.status).toBe(200);
    expect(res.body.items).toBeDefined();

    // Salva o ID do primeiro item retornado
    validItemId = res.body.items[0].id;
  });
});

describe("GET /api/items/:id", () => {
  it("should return 404 if item is not found", async () => {
    const res = await request(app).get("/api/items/non-existing-id");

    expect(res.status).toBe(404);
    expect(res.body.message).toBe("Item not found");
  });

  it("should return item details for a valid ID", async () => {
    // Verifica se um ID válido foi obtido anteriormente
    if (!validItemId) {
      throw new Error("No valid item ID available for testing.");
    }

    const res = await request(app).get(`/api/items/${validItemId}`);

    expect(res.status).toBe(200);
    expect(res.body.item).toBeDefined();
    expect(res.body.item.id).toBe(validItemId);
  });
});
