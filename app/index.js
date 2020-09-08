const express = require('express')
const app = express()
const port = process.env.HTTP_PORT || 8080;

console.log('Starting app')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/hello', (req, res) => {
  res.send('world')
})

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})
