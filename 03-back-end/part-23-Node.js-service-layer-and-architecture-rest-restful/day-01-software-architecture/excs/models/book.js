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
  return books;
}

module.exports = {
  getAll,
  getByAuthorId
}