const express = require('express')
const app = express()
const path = require('path');

app.use(express.static('/'));

app.get('/', (req, res) =>  res.sendFile(path.join('/index.html')));

app.listen(3000, () => console.log('Example app listening on port 3000!'))
