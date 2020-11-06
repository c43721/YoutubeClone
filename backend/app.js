const express = require("express");
const cors = require("cors");

const app = express();

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Listening on http://localhost:${port}/`));

app.use(cors())

app.get("/", (req, res) => {
    res.send("Hello from Home.");
})