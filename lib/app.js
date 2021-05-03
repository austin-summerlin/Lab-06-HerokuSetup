import express from 'express';
import cors from 'cors';
import creatures from '../data/creatures.js';

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!!!!!!!!!!!!!!');
});

app.get('/api/cats', (req, res) => {
  res.json(creatures);
});

export default app;