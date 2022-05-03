const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const path = require('path');
const port = 3000;
const route = require('./routes');
const app = express();
const db = require('./config/db');
const helperHbs = require('./util/helperHbs')
const cookieParser = require('cookie-parser')

db.connect();

app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(express.json());

app.use(cookieParser())

app.use(express.static(path.join(__dirname, 'public')));

// app.use(morgan('combined'))

app.engine(
    '.hbs',
    engine({
        extname: '.hbs',
        helpers: helperHbs,
    }),
);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
