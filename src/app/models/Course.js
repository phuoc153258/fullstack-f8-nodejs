const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String ,required: true},
        image: { type: String ,required: true},
        courseOverview: {type: Array, minlength:0},
        level: {type: String, required: true},
        statusLearn: {type: String, required: true},
        totalStudent: {type: Number, default: 0},
        courseContent : [{
            id : String,
            name: String,
            lesson: [
                {
                    id: String,
                    name: String,
                    videoId: String,
                    isCompleted: Boolean,
                },
            ]
        }]
    }
);

module.exports = mongoose.model('Course', Course);