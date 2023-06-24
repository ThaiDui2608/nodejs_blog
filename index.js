const express = require('express')
const app = express()
const port = 3000

// route
app.get('/', (req, res) => res.send('thai dev'))

app.listen(port, () => console.log(`listen at ${port}`))