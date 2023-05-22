const mongoose = require('mongoose')
const complainMSchema = mongoose.Schema(
    {
        complainid:{
            type:String,
            required: [true,"Please enter a  complainid"]
        },
        assinto:{
            type: String,
            required:true,
       
        },
        status:{
            type: String,
            required:true,
       
        },

    },
    {
        timestamps: true
    }
)

const complainM = mongoose.model('COMPLAIN_M',complainMSchema);
module.exports = complainM;