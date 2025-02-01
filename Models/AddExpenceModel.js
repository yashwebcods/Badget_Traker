const mongoose = require('mongoose')

const ExpenceSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    expence : {
        type:String,
        required:true
    },
    edate:{
        type:String,
        required:true
    },
    userId:{
        type:String,
        require:true
    }
})

const Expence = mongoose.model('Expence' , ExpenceSchema)

module.exports = Expence