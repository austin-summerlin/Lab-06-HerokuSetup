import app from './lib/app.js';

const port = process.env.PORT || 8001;

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});