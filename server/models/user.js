const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    mobileno : {
        type : String,
        required : true
    },

    username : {
        type : String,
        required : true
    },

    email : {
        type : String,
        required : true
    },

})

const user = mongoose.model("user" , userSchema);

module.exports = user;