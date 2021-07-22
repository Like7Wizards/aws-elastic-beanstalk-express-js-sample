const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('<title>Well well well</title>
<body>What do we have here?
<p>This seems to be relatively easy to pick up I suppose</p>
<p>Though I'm sure it become much more complicated</p>
</body>'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
