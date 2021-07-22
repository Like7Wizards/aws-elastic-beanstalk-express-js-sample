const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('<title> Wowzers!</title><Body>Wowzers is right!</body>'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
