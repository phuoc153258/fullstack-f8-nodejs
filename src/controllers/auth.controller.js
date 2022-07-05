const {
    mutipleMongooseToObject,
    mongooseToObject,
} = require('../helper/mongoose');
const authService = require('../service/auth.service');

const show = async (req, res) => {
    try {
        res.render('login.hbs', {
            layout: 'mainLogin.hbs',
        });
    } catch (error) {
        res.json(error);
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        let result = await authService.loginService(email, password);
        res.json(result);
    } catch (error) {
        res.json(error);
    }
};

const register = async (req,res) => {
    try {
        const { fullName, email, password, rePassword } = req.body
        if(!password === rePassword) return res.json('Invalid Infomation')
        let result = await authService.registerService(fullName, email, password)
        console.log(result)
        res.json(result)
    } catch (error) {
        
    }
}

module.exports = {
    show, login, register
};
