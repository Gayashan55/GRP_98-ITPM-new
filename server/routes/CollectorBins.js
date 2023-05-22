const router = require("express").Router();
let CollectorBin = require("../models/CollectorBin");

//Create

router.route("/add").post((req,res)=>{

    const Bin_ID = req.body.Bin_ID;
    const Location = req.body.Location;
    const Started_date = req.body.Started_date;
    const Volunteers = req.body.Volunteers;
    const Finished_date = req.body.Finished_date;


    const newCollectorBin = new CollectorBin({

        Bin_ID,
        Location,
        Started_date,
        Volunteers,
        Finished_date 
       
    })

    newCollectorBin.save().then(()=>{
        res.json("Bin Added")
    }).catch((err)=>{
        console.log(err);
    })

})

//Read

router.route("/").get((req,res)=>{

    CollectorBin.find().then((CollectorBins)=>{
        res.json(CollectorBins)
    }).catch((err)=>{
        console.log(err)
    })

})

//Update

router.route("/update/:id").put(async(req,res)=>{
    let UserId = req.params.id;
    const {Bin_ID, Location, Started_date, Volunteers, Finished_date} = req.body;

    const UpdateBin = {
        Bin_ID,
        Location,
        Started_date,
        Volunteers,
        Finished_date
    }

    const update = await CollectorBin.findByIdAndUpdate(UserId, UpdateBin)

     .then(()=>{
        res.status(200).send({status: "Bin Updated"})
     }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating bin",error: err.message})
     })
})


//Delete

router.route("/delete/:id").delete(async(req,res)=>{
    let userId =req.params.id;

    await CollectorBin.findByIdAndDelete(userId)
        .then(()=>{
            res.status(200).send({status: "Bin Deleted"});
        }).catch((err)=>{
            console.log(err.message);
            res.status(500).send({status: "Error with delete Bin",error: err.message});
        })
})


//View one Bin 

router.route("/get/:id").get(async(req,res)=>{
    let userId = req.params.id;
    await CollectorBin.findById(userId)
        .then(()=>{
            res.status(200).send({status: "Bin fetched",user: user})
        }).catch(()=>{
            console.log(err.message);
            res.status(500).send({status: "Error with Bin", error: err.message});
        })
})

module.exports = router;