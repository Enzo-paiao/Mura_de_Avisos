const express = require('express')
const path = require('path')
const apiRoute = require('./routes/api')




const app = express()
const port = 3000

app.use('/api', apiRoute);
app.use(express.static(path.join(__dirname, "public")));
















app.listen(port, () => { console.log("Server running on port", port) })
