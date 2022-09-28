const express = require('express');
const routerApi = require('./routes');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('hello, my server in express');
});

app.get('/new-path', (req, res) => {
  res.send('hello, Im a new endpoint');
});

routerApi(app);

app.listen(port, () => {
  console.log('my port ' + port);
});



/* app.get('/users',  (req, res)  => {
  const { limit, offset } = req.query;
  if(limit && offset) {
    res.json({
      limit,
      offset
    });
  } else {
    res.send('There is not params');
  }
});

app.get('/categories/:categoryId/products/:productId', (req, res)=> {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId
  });
}) */

