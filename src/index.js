const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res) => {
  res.send('HEALTH-REMEDY')
})

app.get('/me', (req, res) => {
  res.json(me)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})