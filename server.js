const express = require('express')
const app = express()
const path = require('path');

app.use(express.static('/Users/admin/Desktop/sw/'));

app.get('/', (req, res) =>  res.sendFile(path.join('/Users/admin/Desktop/sw/index.html')));

app.listen(3000, () => console.log('Example app listening on port 3000!'))
