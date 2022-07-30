const { toJSON } = require('./base');

class CourseDTO {
    fillable = [
        '_id',
        'name',
        'image',
        'totalStudent',
        'description',
        'courseOverview',
        'level',
        'statusLearn',
        'courseContent',
        'role',
        'slug',
    ];

    constructor(course) {
        this.obj = course;
    }

    toSimple(fields) {
        return toJSON(this.fillable, fields, this.obj);
    }
}

module.exports = {
    CourseDTO,
};
