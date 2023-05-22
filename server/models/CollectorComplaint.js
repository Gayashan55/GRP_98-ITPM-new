const mongoose = require('mongoose');

//schema
const Schema = mongoose.Schema; //creating an object
const collectorComplaintSchema= new Schema(
    {
        Complaint_No : {type:Number,
        required: true},
    
        Name : {type : String,
        required :true},

        Mobile_No : {type : Number,
            required :true},

    }
)

const CollectorComplaint = mongoose.model("CollectorComplaint",collectorComplaintSchema); //(table name ,document name),Schema name

module.exports = CollectorComplaint; 