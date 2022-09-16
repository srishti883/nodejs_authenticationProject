const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name:{
        type: String,
        require: true
    },
    email:{
        type: String,
    },
    phone:{
        type: String
    },
    password:{
        type: String,

    }
})

module.exports = User = mongoose.model('user',UserSchema);