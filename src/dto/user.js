const { toJSON } = require('./base');

class UserDTO {
    fillable = [
        'fullName',
        'email',
        'password',
        'bio',
        'avatar',
        'phoneNumber',
        'facebook',
        'role',
        'slug',
        'createdAt',
        'updatedAt',
        '_id',
    ];

    constructor(user) {
        this.obj = user;
    }

    toSimple(fields) {
        return toJSON(this.fillable, fields, this.obj);
    }
}

module.exports = {
    UserDTO,
};
