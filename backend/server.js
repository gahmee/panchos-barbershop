const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const appointmentRoutes = require('./routes/appointments')

const app = express()

app.use(express.json())


app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/appointments', appointmentRoutes)

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT || 4000, () => {
            console.log('connected to database and listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })
