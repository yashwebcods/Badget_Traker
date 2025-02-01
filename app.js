const express = require('express')
const port = 8002
const app = express()
const path = require('path')
const mongoose = require('mongoose')
const db = mongoose.connect('mongodb+srv://ysiddhapura6:MCcsIdXQDxBOtWeK@cluster0.2mi8v.mongodb.net/BudgetTracker')
const cookieParser = require('cookie-parser')

app.use(express.urlencoded())
app.use(cookieParser())
app.set('view engine' , 'ejs')
app.set('views' , path.join(__dirname,'/views'))

app.listen(port , (err) => {
    if(err){
        console.log(err);
        return false
    }
    console.log('server ia runnig at :'+ port);
})

app.use(require('./Routes/AuthRoute'))