const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const complaintSchema = new Schema({
    province : {
        type : String,
        required : true
    },

    city : {
        type : String,
        required : true
    },

    area : {
        type : String,
        required : true
    },

    location : {
        type : String,
        required : true
    },

    note : {
        type : String
    }
})

const complaint = mongoose.model("complaint" , complaintSchema);

module.exports = complaint;