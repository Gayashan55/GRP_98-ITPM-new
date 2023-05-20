const router = require("express").Router();
let user = require("../models/user");

//add complaint
router.route("/add").post((req,res) => {
    const mobileno = req.body.mobileno;
    const email = req.body.email;
    const username = req.body.username;

    const newUser = new user ({
        mobileno,
        email,
        username
    })

    newUser.save().then(()=>{
        res.json("User Added!")
    }).catch((err)=>{
        console.log(err);
    })
})

//fetch complaint
router.route("/").get((req,res)=>{
    user.find().then((users)=>{
        res.json(users)
    }).catch((err)=>{
        console.log(err);
    })
})

//update complaint
router.route("/update/:id").put(async(req,res)=>{
    let userID = req.params.id;
    const {mobileno,username,email} = req.body;

    const updateUser = {
        mobileno,
        email,
        username
    }

    const update = await user.findByIdAndUpdate(userID, updateUser)
    .then(()=>{
        res.status(200).send({status:"User Updated!"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating data!", error: err.message})
    })
    
})

//delete complaint
router.route("/delete/:id").delete(async(req,res)=>{
    let userID = req.params.id;
    
    await user.findByIdAndDelete(userID)
    .then(()=>{
        res.status(200).send({status:"User Deleted!"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with delete user!", error: err.message})
    })
})

//fetch purticular complaint
router.route("/get/:id").get(async(req,res)=>{
    let userID = req.params.id;

    await user.findById(userID)
    .then((user)=>{
        res.status(200).send({status:"User Fetched!" , user})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with get user!", error: err.message})
    })
})

module.exports = router;