const express = require('express');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');
const { engine } = require('express-handlebars');
const route = require('./routes');
const db = require('./config/db');
const helperHbs = require('./helper/handlebar');
const path = require('path');
const port = 3000;
const app = express();

db.connect();

app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(methodOverride('_method'));

app.use(express.json());

app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

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
