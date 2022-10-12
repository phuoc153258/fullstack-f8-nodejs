const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Role_Course = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    learningPaths: [
        {
            id: String,
            name: String,
            description: String,
            courses: [
                {
                    id: String,
                    courseId: String,
                },
            ],
        },
    ],
    slug: { type: String, required: true },
});

module.exports = mongoose.model('Role_Course', Role_Course);