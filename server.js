const express = require('express')
const app = express()
const path = require('path');
const port = 3000

app.use(express.static('./'));

app.get('/', (req, res) =>  res.sendFile(path.join('/index.html')));

app.listen(port, () => console.log(`Running tutorial on port: ${port}`))
