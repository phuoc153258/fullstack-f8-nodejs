const courseRouter = require('./courses');
const siteRouter = require('./site');
const authRouter = require('./auth');
const learningRouter = require('./learning');

function route(app) {
    // app.use('/courses', authMiddleware ,courseRouter)
    
    // app.use('/learning', authMiddleware ,learningRouter)

    app.use('/auth', authRouter);

    app.use('/', siteRouter);
}
module.exports = route;
