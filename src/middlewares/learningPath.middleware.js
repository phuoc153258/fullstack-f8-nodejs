const Role_Course = require('../models/Role_Course')

const checkSlugLearningPath = async (req, res, next) => {
    try {
        const {slug} = req.params
        req.roleCourse = await Role_Course.findOne({slug:slug}).exec()
        next()
    } catch (error) {
        res.redirect('back')
    }
}

module.exports = {
    checkSlugLearningPath
}