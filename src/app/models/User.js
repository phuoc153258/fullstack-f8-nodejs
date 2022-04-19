const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema(
    {
        fullName: {type: String, required},
        username: {type:String, required},
        email: {type:String, required},
        password: {type:String, required},
        bio: {type: String,default: ''},
        avatar: {type: String, default: 'https://static.fullstack.edu.vn/static/media/fallback-avatar.155cdb2376c5d99ea151.jpg'},
        phoneNumber: {type:Number},
        facebook: {type:String, default:''},
        Course: [{
            id:{type:String},
            courseId: {type:String},
            courseProcess: {type:Array}
        }]

    }
);

module.exports = mongoose.model('User', User);