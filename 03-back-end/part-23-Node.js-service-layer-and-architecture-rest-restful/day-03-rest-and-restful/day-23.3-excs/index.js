require('dotenv').config();
const express = require('express');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use('/products', );

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});