const courseRouter = require('./courses');
const siteRouter = require('./site');
const authRouter = require('./auth');
const learningRouter = require('./learning');
const profileRouter = require('./profile');

function route(app) {
    app.use('/courses', courseRouter);

    app.use('/learning', learningRouter);

    app.use('/auth', authRouter);

    app.use('/profile', profileRouter);

    app.use('/', siteRouter);
}
module.exports = route;
