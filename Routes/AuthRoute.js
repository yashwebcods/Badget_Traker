const express = require('express')
const route = express.Router()
const AuthCtl = require('../Controller/AuthCtl') 
console.log('Route Connected');

route.get('/' , AuthCtl.Register)
route.post('/addUser' , AuthCtl.AddUser)
route.get('/login' , AuthCtl.Login)
route.use('/budgetHome' , require('./BudgetRoute'))
route.post('/authLogin' , AuthCtl.AuthLogin)
module.exports = route
