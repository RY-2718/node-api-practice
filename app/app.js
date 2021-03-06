const express = require('express');
const router = require('./route/v1');

const app = express();
const port = process.env.PORT || 3000;

app.use('/api/v1', router);

app.listen(port);
