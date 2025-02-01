const express = require('express')
const route = express.Router()
const BudgetCtl = require('../Controller/BudgetCtl')

route.get('/' , BudgetCtl.BudgetHome)
route.post('/addIncome' , BudgetCtl.AddIncome)
route.post('/addExpence' , BudgetCtl.AddExpence)
module.exports = route
