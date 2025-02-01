const UserModel = require('../Models/AuthModel')

module.exports.Register = (req, res) => {
    try {
            if(!req.cookies.user){
                res.render('Auth/Register')
            }else{
                res.redirect('/login')
            }
    } catch (err) {
        console.log(err);
        res.redirect('back')
    }
}
module.exports.AddUser = async (req, res) => {
    try {
        console.log(req.body);
        let User = await UserModel.create(req.body)
        
        if (req.body.password == req.body.cpassword) {
            if (User) {
                console.log('User Added Success');
                res.cookie('User', User)
                res.redirect('/budgetHome')
            }
            else {
                console.log('User Added Faild');
                res.redirect('back')
            }
        }else{
            console.log('Place Enter Same Password');
            res.redirect('back')
        }
    } catch (err) {
        console.log(err);
        res.redirect('back')
    }
}

module.exports.Login = async (req, res) => {
    try {
        res.render('Auth/Login')
    } catch (err) {
        console.log(err);
        res.redirect('back')
    }
}

module.exports.AuthLogin = async (req, res) => {
    try {
        // console.log(req.body);
        let isAdmin = await UserModel.findOne({ email: req.body.email })
        if (isAdmin) {
            let isAdminpassword = await UserModel.findOne({ password: req.body.password })
            if (isAdminpassword) {
                res.cookie('User', isAdmin)
                res.redirect('/budgetHome')
            } else {
                console.log('Password is wrong');
                resizeBy.redirect('back')
            }
        } else {
            console.log('Email is wrong');
            res.redirect('back')
        }

    } catch (err) {
        console.log(err);
        res.redirect('back')
    }
}