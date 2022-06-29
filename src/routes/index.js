const courseRouter = require('./courses');
const siteRouter = require('./site');
const authRouter = require('./auth');
const learningRouter = require('./learning')
const authMiddleware = require('../middlewares/auth.middleware');

function route(app) {
    // app.use('/courses', authMiddleware ,courseRouter)
    app.use('/login', authRouter)
    // app.use('/learning', authMiddleware ,learningRouter)  
    app.use('/', authMiddleware.isAuthenticateHomePage, siteRouter);
}
module.exports = route;
