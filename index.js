const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');


const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const whitelist = ['http://localhost:5500', 'https://myapp.com'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not Allowed'));
    }
  }
}
app.use(cors(options));


app.get('/', (req, res) => {
  res.send('hello, my server in express');
});

app.get('/new-path', (req, res) => {
  res.send('hello, Im a new endpoint');
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('my best port ' + port);
});
