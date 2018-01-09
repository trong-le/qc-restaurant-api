const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(require('./controllers'));

app.listen(port, () => {
  console.log('Listening on port ' + port)
});