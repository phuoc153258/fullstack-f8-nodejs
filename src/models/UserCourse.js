const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User_Course = new Schema({
    idUser: { type: String, required: true },
    detailCourses: [
        {
            id: String,
            idCourse: String,
            indexVideo: { type: Number, default: 0 },
            lessonCompleted: [
                {
                    idLesson: String,
                    idChapter: String,
                },
            ],
        },
    ],
});

module.exports = mongoose.model('User_Course', User_Course);
