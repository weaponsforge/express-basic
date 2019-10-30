const express = require('express')
const PORT = process.env.PORT || 3000
const app = express()

app.get('/', (req, res) => {
  res.status(200).send({message: 'It Works!'})
})

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`)
})