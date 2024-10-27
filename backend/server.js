const express = require('express')
const cors = require('cors')
const commentsRouter = require('./index')

const app = express()
app.use(cors())
app.use(express.json())

app.use('/comments', commentsRouter)

const PORT = 5000
app.listen(PORT,() => {
    console.log(`Server runs on port ${PORT}`)
})