const router = require("express").Router();
let CollectorComplaint = require("../models/CollectorComplaint");

//Create

router.route("/add").post(async(req,res)=>{

    const Complaint_No = Number(req.body.Complaint_No);
    const Name = req.body.Name;
    const Mobile_No = Number(req.body.Mobile_No);

    const newCollectorComplaint = new CollectorComplaint({

        Complaint_No,
        Name,
        Mobile_No,
       
    })

    newCollectorComplaint.save().then(()=>{
        res.json("Complaint Added")
    }).catch((err)=>{
        console.log(err);
    })

})

//Read

router.route("/").get((req,res)=>{

    CollectorComplaint.find().then((CollectorComplaints)=>{
        res.json(CollectorComplaints)
    }).catch((err)=>{
        console.log(err)
    })

})

/*Update

router.route("/update/:id").put(async(req,res)=>{
    let UserId = req.params.id;
    const {assignedComplaint_No, Name, Contact_No} = req.body;
})*/


//Delete

router.route("/delete/:id").delete(async(req,res)=>{
    let userId =req.params.id;

    await CollectorComplaint.findByIdAndDelete(userId)
        .then(()=>{
            res.status(200).send({status: "Complaint Deleted"});
        }).catch((err)=>{
            console.log(err.message);
            res.status(500).send({status: "Error with delete Complaint",error: err.message});
        })
})


//View one complaint 

router.route("/get/:id").get(async(req,res)=>{
    let userId = req.params.id;
    await CollectorComplaint.findById(userId)
        .then(()=>{
            res.status(200).send({status: "Complaint fetched",user: user})
        }).catch(()=>{
            console.log(err.message);
            res.status(500).send({status: "Error with Complaint", error: err.message});
        })
})

module.exports = router;