const { toJSON } = require('./base');

class UserCourseDTO {
    fillable = ['_id', 'idUser', 'detailCourses'];

    constructor(userCourse) {
        this.obj = userCourse;
    }

    toSimple(fields) {
        return toJSON(this.fillable, fields, this.obj);
    }
}

module.exports = {
    UserCourseDTO,
};
