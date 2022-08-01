const { toJSON } = require('./base');

class RoleDTO {
    fillable = ['_id', 'roleName'];

    constructor(role) {
        this.obj = role;
    }

    toSimple(fields) {
        return toJSON(this.fillable, fields, this.obj);
    }
}

module.exports = {
    RoleDTO,
};
