const connection = require('./connection');

const getAll = async () => {
  const [users] = await connection.execute(
    'SELECT * FROM model_example.books;'
  );
  return users;
}

const getByAuthorId = async (authorId) => {
  const [ books ] = await connection.execute(
    'SELECT * FROM model_example.books WHERE author_id=?;', [authorId]
  )
  return books.map(({ id, title, author_id }) => ({
    id,
    title,
    authorId: author_id,
  }));

}

const getById = async (id) => {
  const [ books ] = await connection.execute(
    'SELECT * FROM model_example.books WHERE id=?;', [id]
  )

  if (books.length === 0) return null
  
  return books.map(({ id, title, author_id }) => ({
    id,
    title,
    authorId: author_id,
  }))[0];
}

const createAuthor = ({}) => {

}

module.exports = {
  getAll,
  getByAuthorId,
  getById,
}