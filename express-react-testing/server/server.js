const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors())

app.get('/', (req, res) => {
    res.json({"users": ["userOne", "userTwo", "userThree"]});
})

app.listen(5000, () => {
    console.log('Server is running on: http://localhost:5000/')
})