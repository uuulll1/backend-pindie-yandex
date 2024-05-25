const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("./middlewares/cors");
const cookieParser = require("cookie-parser");

// consts
const PORT = 3001;
const app = express();

const connectToDatabase = require("./database/connect");
const apiRouter = require("./routes/apiRouter");
const pagesRouter = require("./routes/pages");
connectToDatabase();

app.use(
    cors,
    cookieParser(),
    bodyParser.json(),
    pagesRouter,
    apiRouter,
    express.static(path.join(__dirname, "public"))
);

app.listen(PORT, () => {
    console.log(`server start on ${PORT}`);
});
