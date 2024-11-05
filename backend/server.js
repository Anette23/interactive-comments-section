const express = require('express')
const cors = require('cors')
const routes = require('./index')

const app = express()
const PORT = 5000

app.use(cors())
app.use(express.json())

app.use('/api', routes)

app.get('/', (req,res) => {
    res.send('Cau backend funguje')
})

app.listen(PORT, () => {
    console.log(`Server runs on port ${PORT}`)
})