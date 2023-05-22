const mongoose = require('mongoose')
const BinManagementSchema = mongoose.Schema(
    {
        BinID:{
            type:String,
            required: [true,"Please enter a BinID"]
        },
        Area:{
            type:String,
            required:true,
            
        },
  
        LandMark:{
            type: String,
            required:false,
     
        },
        LoadType:{
            type: String,
            required:false,
     
        },
        PeriodOfCycle:{
            type: String,
            required:false,
     
        },
        BusRootAddress:{
            type: String,
            required:false,
     
        },
        AssinDriver:{
            type: String,
            required:false,
               
        }

    },
    {
        timestamps: true
    }
)

const BinManage = mongoose.model('Bin_Management',BinManagementSchema);
module.exports = BinManage;