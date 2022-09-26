const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('hello, my server in express');
})

app.get('/new-path', (req, res) => {
  res.send('hello, Im a new endpoint');
})

app.get('/products', (req, res) => {
  res.json([
    {
      name: 'product 1',
      price: 1000
    },
    {
      name: 'product 2',
      price: 2000
    }
  ]);
})

app.get('/products/:id', (req, res) =>  {
  const { id } = req.params;
  res.json({
      id,
      name: 'product 2',
      price: 2000
  });
});

app.get('/categories/:categoryId/products/:productId', (req, res)=> {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId
  });
})

app.listen(port, () => {
  console.log('my port ' + port);
});
