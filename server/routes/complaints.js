const router = require("express").Router();
let complaint = require("../models/complaint");

router.route("/add").post((req,res) => {
    const province = req.body.province;
    const city = req.body.city;
    const area = req.body.area;
    const location = req.body.location;
    const note = req.body.note;

    const newComplaint = new complaint ({
        province,
        city,
        area,
        location,
        note
    })

    newComplaint.save().then(()=>{
        res.json("Complaint Added!")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req,res)=>{
    complaint.find().then((complaints)=>{
        res.json(complaints)
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/update/:id").put(async(req,res)=>{
    let complaintID = req.params.id;
    const {province, city, area, location, note} = req.body;

    const updateComplaint = {
        province, 
        city, 
        area, 
        location, 
        note
    }

    const update = await complaint.findByIdAndUpdate(complaintID, updateComplaint)
    .then(()=>{
        res.status(200).send({status:"Complaint Updated!"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating data!", error: err.message})
    })
    
})

router.route("/delete/:id").delete(async(req,res)=>{
    let complaintID = req.params.id;
    
    await complaint.findByIdAndDelete(complaintID)
    .then(()=>{
        res.status(200).send({status:"Complaint Deleted!"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with delete complaint!", error: err.message})
    })
})

router.route("/get/:id").get(async(req,res)=>{
    let complaintID = req.params.id;

    const user = await complaint.findById(complaintID)
    .then((complaint)=>{
        res.status(200).send({status:"Complaint Fetched!" , complaint})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with get complaint!", error: err.message})
    })
})

module.exports = router;