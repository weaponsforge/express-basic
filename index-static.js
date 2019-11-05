const express = require('express')
const PORT = process.env.PORT || 3000
const path = require('path')
const app = express()

// Enable express to serve static files from a directory
app.use(express.static(path.join(__dirname, '..', 'express-static/public')))

// Serve files from the static directory
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'express-basic/public', '*.html'))
})

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`)
})