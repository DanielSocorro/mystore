const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('hello, my server in express');
})

app.listen(port, () => {
  console.log('my port ' + port);
});