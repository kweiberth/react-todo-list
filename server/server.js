const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist'));

app.use('/', (req, res, next) => res.sendFile(path.resolve('client/index.html')))

const port = 3000;

app.listen(port, error => error ? console.error(error) : console.log("Listing on port", port))
