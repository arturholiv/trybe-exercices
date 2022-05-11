import app from './app';

const PORT = process.env.DB_PORT || 3306

app.listen(PORT, () => {
    console.log(`Server runnin in http://localhost:${PORT}`)
})