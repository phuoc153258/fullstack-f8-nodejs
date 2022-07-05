const {
    mutipleMongooseToObject,
    mongooseToObject,
} = require('../helper/mongoose');
const siteService = require('../service/site.service');

const home = async (req, res) => {
    try {
        const { userId } = req;
        const data = await siteService.homeService(userId);
        res.render('home', {
            layout: 'mainHome.hbs',
            courses: mutipleMongooseToObject(data.courses),
            user: mongooseToObject(data.user),
        });
    } catch (error) {
        res.json(error);
    }
};

module.exports = {
    home,
};
