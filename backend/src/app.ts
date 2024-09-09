import cors from "cors";
import express from "express";
import rateLimit from "express-rate-limit";
import helmet from "helmet";

import { config } from "./config";
import itemsRouter from "./routes/items";

const app = express();

app.use(helmet());

app.use(cors({ origin: config.allowedDomain }));

// Limit the number of requests per IP
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // Limite de 100 requisições
});

app.use(limiter);

app.use(express.json());

// Route registration
app.use("/api", itemsRouter);

app.get("/", (req, res) => {
  res.send("API is running");
});

export default app;
