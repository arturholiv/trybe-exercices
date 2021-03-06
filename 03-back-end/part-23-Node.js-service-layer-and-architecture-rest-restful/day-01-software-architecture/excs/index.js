require('dotenv').config();
const express = require('express');
const bookModel = require('./models/book')

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/book', async function (req, res, next) {
  const { author_id } = req.query;

  const books = (author_id)
  ? await bookModel.getAll()
  : await bookModel.getByAuthorId();

  return res.status(200).json(books);
});

app.get('/book/:id', async (req, res) => {
  const { id } = req.params;

  const book = book.getById(id);

  if (!book) return res.status(404).json({ message: 'Not found' });

  res.status(200).json(book);
})

app.post('/users', function (req, res, next) {
  const { name } = req.body;
  res.status(200)
});

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
