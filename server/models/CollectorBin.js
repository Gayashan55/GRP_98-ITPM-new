const mongoose = require('mongoose');

//schema
const Schema = mongoose.Schema; //creating an object
const CollectorBinSchema= new Schema(
    {
        Bin_ID : {type:String,
        required: true},
    
        Location : {type : String,
        required :true},

        Started_date : {type : Date,
            required :true},

        Volunteers : {type : String,
            required :true},

        Finished_date : {type : Date,
            required :true},

    }
)

const collectorBin = mongoose.model("CollectorBin",CollectorBinSchema); //(table name ,document name),Schema name

module.exports = collectorBin; 