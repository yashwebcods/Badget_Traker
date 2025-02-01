const mongoose = require('mongoose')

const IncomeSchema = mongoose.Schema({
    income : {
        type:String,
        required:true
    },
    idate:{
        type:String,
        required:true
    }, 
    userId:{
        type:String,
        require:true
    }
})

const Income = mongoose.model('Income' , IncomeSchema)

module.exports = Income 