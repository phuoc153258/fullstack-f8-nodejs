const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');

const User = new Schema(
    {
        fullName: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        avatar: {
            type: String,
            default:
                'https://static.fullstack.edu.vn/static/media/fallback-avatar.155cdb2376c5d99ea151.jpg',
        },
        phoneNumber: { type: Number, default: 0 },
        facebook: { type: String, default: '' },
        slug: { type: String, slug: 'fullName', unique: true },
        role: { type: String, required: true },
    },
    {
        timestamps: true,
    },
);

mongoose.plugin(slug);

module.exports = mongoose.model('User', User);
