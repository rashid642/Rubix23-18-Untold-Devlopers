const express = require("express");
const path = require("path");
const upload = require("express-fileupload");
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
    console.log("file=",req.files);
    console.log("body=",req.body);
    res.redirect("/donate");
})
// const filename = "";
// const doner_name = req.body.doner_name;
// const contact_no = req.body.contact_no;
// const food_item = req.body.food_item;
// const no_of_people = req.body.no_of_people;
// const address = req.body.address;
// const no_of_hours = req.body.no_of_hours;
// try {
//     const sql = "INSERT INTO `doner_form` (`doner_name`, `contact_no`, `foot_item`, `no_of_people`, `address`, `no_of_hours`, `image`, `did`, `current_date_time`) VALUES ('"+doner_name+"', '"+contact_no+"', '"+food_item+"', '"+no_of_people+"', '"+address+"', '"+no_of_hours+"', '"+uploadpath+"', NULL, current_timestamp());"
//     connection.query(sql, (err, rows) => {
//         file.mv(uploadpath + "/" + filename, (error) => {
//             res.redirect("/donate",{
//                 msg : "Donation Request Successfull"
//             });
//         })

//     })
// } catch (error) {
//     console.log(error);
//     res.redirect("/donate",{
//         msg : "Donation Request was not made"
//     });
// }

module.exports = router;

