const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('<html><title>Awsome AWS Codepipeline test</title><H1>We are the championes</H1></HTML>'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
