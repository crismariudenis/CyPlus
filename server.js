const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/cyplus/browser'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/cyplus/browser/'}),
);

app.listen(process.env.PORT || 8080);