const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email is require'],
    },
    username: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Body is required'],
    },
    list: [
        {
            type: mongoose.Types.ObjectId,
            ref: "List",
        }
    ]
},
    {
        timestamps: true 
    });


module.exports = mongoose.model('User', userSchema);  