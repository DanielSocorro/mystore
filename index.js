
const express = require('express');
const faker = require('faker');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('hello, my server in express');
})

app.get('/new-path', (req, res) => {
  res.send('hello, Im a new endpoint');
})

app.get('/products', (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let index = 0; index < limit; index++) {
      products.push({
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image : faker.image.imageUrl(),
      });
  }
  res.json(products)
});
app.get('/products/filter', (req, res) => {  ///  specific routes MUST COME BEFORE global
  res.send('Im a filter');
})

app.get('/products/:id', (req, res) =>  {  ///  global routs MUST COME AFTER specifics
  const { id } = req.params;
  res.json({
      id,
      name: 'product 2',
      price: 2000
  });
});


app.get('/users',  (req, res)  => {
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
})

app.listen(port, () => {
  ('my port ' + port);
});
