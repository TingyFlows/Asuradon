const express = require('express');


const app = express();
const port = 3000;      

app.get('/', (req, res) => {
  res.send('Welcome to the ASURADON Backend');
});

app.listen(port, () => {
  console.log(`ASURADON server is running on http://localhost:${port}`);
});