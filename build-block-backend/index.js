const express = require('express');
const app = express();
const PORT = 8080;

const cors = require('cors');

app.listen(
    PORT,
    () => console.log(`Running on http://localhost:${PORT}`)
)

app.get('/test', (req, res) => {
    res.status(200).json({
        "hello" : "hi"
    })
})

