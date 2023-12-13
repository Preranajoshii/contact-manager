const express = require('express')
const connectDb = require('./config/dbConnection')
//const errorHandler = require('./controller/Middleware/errorHandler')

//const dotenv = require('dotenv').config()
connectDb();
const app = express()

const PORT = 5001
app.use(express.json())
app.use("/api/contacts", require("./routes/contactRoutes"))
//app.use(errorHandler)

app.listen(PORT,()=>{
    console.log(`Running on the server port number ${PORT}`)
})

