import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import { chromium } from 'playwright';
import LRU from 'lru-cache';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const PORT = process.env.PORT || 3000;
const API_KEY = process.env.API_KEY || '';

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static('public'));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Your API endpoints...
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
