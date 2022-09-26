const express = require('express');
const faker = require('faker');

const router = express.Router();


router.get('/', (req, res) => {
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
router.get('/filter', (req, res) => {  ///  specific routes MUST COME BEFORE global
  res.send('Im a filter');
})

router.get('/:id', (req, res) =>  {  ///  global routs MUST COME AFTER specifics
  const { id } = req.params;
  res.json({
      id,
      name: 'product 2',
      price: 2000
  });
});

module.exports = router;
