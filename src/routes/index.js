const courseRouter = require('./courses');
const siteRouter = require('./site');
const authRouter = require('./auth');
const learningRouter = require('./learning');
const profileRouter = require('./profile');
const learningPathRouter = require('./learningPath');

function route(app) {
    app.use('/courses', courseRouter);

    app.use('/learning', learningRouter);

    app.use('/auth', authRouter);

    app.use('/profile', profileRouter);

    app.use('/learning-paths', learningPathRouter);

    app.use('/', siteRouter);
}
module.exports = route;
