const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const path = require('path');
const port = 3000;
const route = require('./routes');
const app = express();
const db = require('./config/db');

db.connect();

app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

// app.use(morgan('combined'))

app.engine(
    '.hbs',
    engine({
        extname: '.hbs',
        helpers: {
            sum(a, b) {
                return a + b;
            },
            isTypeHome(course, type){
                for (let index = 0; index < course.role.length; index++) {
                    if(course.role[index] == type) return `<div class="section-item">
                        <a title="Kiến Thức Nhập Môn IT" href="#" class="section-img"
                            style="background-image: url('${course.image}');">
                            <button class="section-watch">Xem Khoá học</button>
                        </a>
                        <div class="section-name">${course.name}</div>
                        <div class="section-count">
                            <i class="fa-solid fa-users"></i>
                            <span>${course.totalStudent}</span>
                        </div>
                    </div>`
                }                        

            }
        },
    }),
);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
