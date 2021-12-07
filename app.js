const express = require('express');
const { application } = require('express');
const ChromecastAPI = require('chromecast-api');

const client = new ChromecastAPI()

const app = express();

app.use(express.json());

app.use('/api', require('./routes'));

app.set('client', client);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));