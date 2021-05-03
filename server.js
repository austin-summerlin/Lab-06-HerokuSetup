import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  console.log('handling the get request for /');
  res.send('Hellow World');
});

app.listen(8001, () => {
  console.log('App started on port 8001');
});