const express = require("express");
const path = require("path");
const router = new express.Router();
const {
    checkAuthenticated,
    checkNotAuthenticated,
    checkIsRetailler,
    checkIsNGO
} = require("../utils/middleware");
const connection = require("../utils/dbconnection");

router.get("/ngo_profile", (req, res) => {
    let ngo = false, retailler = false;
    if(!req.user){
    }else if(req.user.status ==="ngo"){
        ngo = true;
    }else{
        retailler = true;
    }
    const id = req.query.id;
    // console.log("id",id);
    try {
        const sql = "select * from ngodetails where id = "+id+""
        connection.query(sql, (err, rows)=>{
            if(!err){
                let data = rows[0];
                res.render("ngo_profile", {
                    ngo, 
                    retailler,
                    data
                })
            }else{
                console.log(err);
                res.render("ngo_profile",{
                    ngo, 
                    retailler
                });
            }
        })
    } catch (error) {
        console.log(error);
        res.render("ngo_profile",{
            ngo, 
            retailler
        });
    }
})
router.get("/ngolist", (req, res) => {
    let ngo = false, retailler = false;
    if(!req.user){
    }else if(req.user.status === "ngo"){
        ngo = true;
    }else{
        retailler = true;
    }
    const sql = "select * from ngodetails";
    try {
        connection.query(sql, (err, rows)=>{
            if(!err){
                // console.log(rows);
                res.render("ngolist", {
                    rows,
                    ngo, 
                    retailler
                })
            }else{
                console.log(err);
                res.render("ngolist",{
                    ngo, 
                    retailler
                });
            }
        })
    } catch (error) {
        console.log(error);
        res.render("ngolist", {
            ngo, 
            retailler
        });
    }
})
router.get("/donationlist", (req, res) => {
    let ngo = false, retailler = false;
    if(!req.user){
    }else if(req.user.status ==="ngo"){
        ngo = true;
    }else{
        retailler = true;
    }
    res.render("donationlist",{
        ngo, 
        retailler
    });
})
router.get("/donate", (req, res) => {
    let ngo = false, retailler = false;
    console.log(req.user);
    if(!req.user){
    }else if(req.user.status ==="ngo"){
        ngo = true;
    }else{
        retailler = true;
    }
    console.log("donaiton page ",ngo, retailler)
    res.render("donate",{
        ngo, 
        retailler
    });
})
router.post("/donate", (req, res) => {
    const uploadpath = path.join(__dirname, "../../public/uploads");
    var file = req.files.file
    const filename = file.name;
    try {
        const sql = "INSERT INTO `doner_form` (`doner_name`, `contact_no`, `foot_item`, `no_of_people`, `address`, `no_of_hours`, `image`, `did`, `current_date_time`) VALUES ('Rahsid', '897512345', 'Dal,Roti,Chawal', '15', 'Behram Baugh', '16', 'kdnive', NULL, current_timestamp());"
        connection.query(sql, (err, rows) => {
            file.mv(uploadpath + "/" + filename, (error) => {
                res.redirect("/donate",{
                    msg : "Donation Request Successfull"
                });
            })

        })
    } catch (error) {
        console.log(error);
        res.redirect("/donate",{
            msg : "Donation Request was not made"
        });
    }
})

module.exports = router;

