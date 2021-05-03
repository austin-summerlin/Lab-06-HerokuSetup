import express from 'express';
import cors from 'cors';
import creatures from '../data/creatures.js';

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!!!!!!!!!!!!!!');
});

app.get('/api/creatures', (req, res) => {
  res.json(creatures);
});

app.get('/api/creatures/1', (req, res) => {
  // will be from a db tomorrw!
  res.json(creatures[0]);
});

export default app;