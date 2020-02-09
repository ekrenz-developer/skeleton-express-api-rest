require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');

const router = require('./src/routes');

const port = process.env.PORT || 8080;

//conectamos todos los middleware de terceros
app.use(cors());
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', router);

app.listen(port, () => {
  console.log('Server is up in port ' + port)
})

