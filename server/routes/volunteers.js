const router = require("express").Router();
let volunteer = require("../models/volunteer");

router.route("/add").post((req,res) => {
    const name = req.body.name;
    const phone = req.body.phone;
    const province = req.body.province;
    const city = req.body.city;
    const availability = req.body.availability;

    const newVolunteer = new volunteer ({
        name,
        phone,
        province,
        city,
        availability
    })

    newVolunteer.save().then(()=>{
        res.json("Registered Successfully!")
    }).catch((err)=>{
        console.log(err);
    })
})

module.exports = router;