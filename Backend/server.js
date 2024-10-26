const express = require('express')
const bodyParser = require('body-parser')
const graphRouter = require('./graph-router')

const PORT = 3000
const app = express()

app.use('/graph', graphRouter)
app.use(bodyParser.json())
app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}/`)
})
