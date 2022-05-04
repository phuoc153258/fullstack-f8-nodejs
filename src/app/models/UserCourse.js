const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserCourse = new Schema({
    idUser: { type: String, required: true },
    detailCourses: [
        {
            id: String,
            idCourses: String,
            indexVideo: {type: Number, default: 0},
            lessonCompleted: [{
                idLesson: String,
                idChapter: String
            }],
        },
    ],
});

module.exports = mongoose.model('UserCourse', UserCourse);
