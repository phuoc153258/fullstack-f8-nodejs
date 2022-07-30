const toJSON = (fillable, fields, obj) => {
    const filterValid = fields.filter((field) => {
        return fillable.includes(field);
    });
    let res = {};
    for (const [key, value] of Object.entries(obj._doc)) {
        if (filterValid.includes(key)) res[key] = value;
    }
    return res;
};

module.exports = {
    toJSON,
};
