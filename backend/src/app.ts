import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { config } from './config';
import itemsRouter from '../routes/items';

const app = express();

// Segurança
app.use(helmet());

// Limita requisições ao domínio permitido
app.use(cors({ origin: config.allowedDomain }));

// Limitar o número de requisições por IP
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // Limite de 100 requisições
});
app.use(limiter);

app.use(express.json());

// Registro das rotas
app.use('/api', itemsRouter);

app.get('/', (req, res) => {
  res.send('API is running');
});

export default app;
