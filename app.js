const express = require('express');
const { application } = require('express');
const ChromecastAPI = require('chromecast-api');
const cors = require('cors')

const client = new ChromecastAPI()

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api', require('./src/routes/routes'));

app.set('client', client);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));