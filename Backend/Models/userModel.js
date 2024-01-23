const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        require: [true, 'Email is require'],
        trim: true,
        unique: true
    },
    username: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        requires: [true, 'Body is required'],
    },
    list:[
        {
            type:mongoose.Types.ObjectId,
            ref:"List",
        }
    ]
});


module.exports = mongoose.model('User', userSchema);