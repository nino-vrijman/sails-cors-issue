const path = require('path');
const express = require('express');

const app = express();

app.use(express.static(path.join(__dirname, 'static')));

app.listen(process.env.PORT || 8080, () => console.log('Server running'));
