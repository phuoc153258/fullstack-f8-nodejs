const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/fullstack_f8_dev');
        console.log('Connect success');
    } catch (error) {
        console.log('Error: ', error);
    }
}

module.exports = { connect };