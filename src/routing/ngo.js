const express = require("express");
const path = require("path");
const router = new express.Router();
const upload = require("express-fileupload");
router.use(upload());
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
router.get("/ngo_own_profile", (req, res) => {
    let ngo = true;
    try {
        console.log(req.user.id);
        const sql = 'SELECT * FROM ngodetails WHERE contact = "'+req.user.email+'";'
        console.log(sql)
        connection.query(sql, (err, rows)=>{
            if(!err){
                console.log("rows[0]=",rows)
                let data = rows[0];
                res.render("ngo_own_profile", {
                    data,
                    ngo
                })
            }else{
                console.log(err);
                res.render("ngo_own_profile",{
                    ngo
                });
            }
        })
    } catch (error) {
        console.log(error);
        res.render("ngo_own_profile",{
            ngo
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
    const sql = "select * from doner_form"
    try {
        connection.query(sql, (err, rows) => {
            if(err){
                console.log(err);
                return res.render("donationlist",{
                    ngo, 
                    retailler
                });
            }
            // console.log(rows);
            res.render("donationlist", {
                ngo,
                retailler,
                rows
            })
        })
    } catch (error) {
        console.log(error);
        res.render("donationlist",{
            ngo, 
            retailler
        });
    }
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
    res.render("donate",{
        ngo, 
        retailler
    });
})
router.post("/donate", (req, res) => {
    var uploadpath = path.join(__dirname, "../../public/uploads");
    var file = req.files.file
    const filename = file.name;
    const doner_name = req.body.doner_name;
    const contact_no = req.body.contact_no;
    const food_item = req.body.food_item;
    const no_of_people = req.body.no_of_people;
    const address = req.body.address;
    const no_of_hours = req.body.no_of_hours;
    // console.log("file",file);
    // res.redirect("donate");
    try {
        var newuploadpath = uploadpath + "/" + filename;
        const sql = "INSERT INTO `doner_form` (`doner_name`, `contact_no`, `foot_item`, `no_of_people`, `address`, `no_of_hours`, `image`, `did`, `current_date_time`) VALUES ('"+doner_name+"', '"+contact_no+"', '"+food_item+"', '"+no_of_people+"', '"+address+"', '"+no_of_hours+"', '"+filename+"', NULL, current_timestamp());"
        console.log(sql);
        connection.query(sql, (err, rows) => {
            if(err){
                console.log(err);
                return res.redirect("/donate");
            }
            file.mv(uploadpath + "/" + filename, (error) => {
                res.redirect("/donate");
            })
        })
    } catch (error) {
        console.log(error);
        res.redirect("/donate");
    }
})
module.exports = router;

