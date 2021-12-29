import appModulePath from 'app-module-path';
import express from 'express';
import ChromecastAPI from 'chromecast-api';
import cors from 'cors';

appModulePath.addPath(`${__dirname}`);

const client = new ChromecastAPI()

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static('/'))

app.use('/api', require('./src/routes/routes'));

app.set('client', client);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));