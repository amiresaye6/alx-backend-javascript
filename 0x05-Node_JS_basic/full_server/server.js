const express = require('express');
const router = require('./routes');

const app = express();
const port = 1245;

app.use('/', router);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

module.exports = app;
