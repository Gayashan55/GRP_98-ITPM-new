const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const volunteerSchema = new Schema({
    name : {
        type : String,
        required : true
    },

    phone : {
        type : String,
        required : true
    },

    province : {
        type : String,
        required : true
    },

    city : {
        type : String,
        required : true
    },

    availability : {
        type : String,
        required : true
    }
})

const volunteer = mongoose.model("volunteer" , volunteerSchema);

module.exports = volunteer;