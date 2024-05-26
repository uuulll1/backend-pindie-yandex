const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
const cookieParser = require('cookie-parser')
const { cors }  = require('./middlewares/cors')
const connectToDatabase = require('./database/connect')
const apiRouter = require('./routes/apiRouter')
const pagesRouter = require('./routes/pages')
const PORT = 3001
connectToDatabase()
app.use(
    cors,
    cookieParser(),
    bodyParser.json(),
    pagesRouter,
    apiRouter,
    express.static(path.join(__dirname, 'public')),
)

app.listen(PORT, () => {
    console.log(`Запущен на http://localhost:${PORT}`)
})