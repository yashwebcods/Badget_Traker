const IncomeModel = require('../Models/AddIncomeModel')
const ExpenceModel = require('../Models/AddExpenceModel')

module.exports.BudgetHome = async (req, res) => {
    try {
        console.log(req.cookies.User.name);
        if (req.cookies.User) {
            let income = await IncomeModel.find({userId:req.cookies.User._id})
            let expenceData = await ExpenceModel.find({userId:req.cookies.User._id})
            let labelName = []
            let price = []
            let TotalExpence = 0;
            let incomeData = 0
            income.map((v) => {
                console.log(v.income);
                
                incomeData = incomeData + parseInt(v.income)
            })
            console.log(incomeData);
            
            expenceData.map((v) => {
                TotalExpence = TotalExpence + parseInt(v.expence)
                labelName.push(v.title)
                price.push(v.expence)
            }) 
        
            res.render('BudgetHome', {
                incomeData,
                expenceData,
                TotalExpence,
                labelName,
                price
            })
        }else{
            res.redirect('/')
        }
    } catch (err) {
        console.log(err);
        res.redirect('back')
    }
}

module.exports.AddIncome = async (req, res) => {
    try {
        req.body.userId = req.cookies.User._id
        let Data = await IncomeModel.create(req.body)
        if (Data) {
            console.log('Income Added Succesfully');
            res.redirect('back')
        } else {
            console.log('Income Add Failed');
            res.redirect('back')
        }
        } catch (err) {
            console.log(err);
            res.redirect('back')
        }
}
module.exports.AddExpence = async (req, res) => {
    try {
        req.body.userId = req.cookies.User._id
        let Data = await ExpenceModel.create(req.body)
        if (Data) {
            console.log('Expence Added Succesfully');
            res.redirect('back')
        } else {
            console.log('Expence Add Failed');
            res.redirect('back')
        }
    } catch (err) {
        console.log(err);
        res.redirect('back')
    }
} 