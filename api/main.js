const express = require('express')
const app = express()
const api = require('./index.js')

app.use(express.json())
app.use('/', api)

const PORT = 8080
app.listen(PORT, () => console.log('Server is running in port ',PORT))
