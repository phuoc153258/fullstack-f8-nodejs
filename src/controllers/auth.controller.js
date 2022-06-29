const {
    mutipleMongooseToObject,
    mongooseToObject,
} = require("../util/mongoose");
const authService = require('../service/auth.service')

const show = async (req, res) => {
    try {
        res.render("login.hbs", {
            layout: "mainLogin.hbs",
        });
    } catch (error) {
        res.json(error);
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body
        let token = await authService.loginService(email,password)
        res.json({
            message: "Success",
            token: token
        })
    } catch (error) {
        res.json(error);
    }

}

    
module.exports = {
    show,login
};
