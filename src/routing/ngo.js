const express = require("express");
const router = new express.Router();
const {
    checkAuthenticated,
    checkNotAuthenticated,
    checkIsRetailler,
    checkIsNGO
} = require("../utils/middleware");
const connection = require("../utils/dbconnection");

router.get("/ngo_profile", (req, res) => {
    res.render("ngo_profile");
})
router.get("/ngolist", (req, res) => {
    res.render("ngolist");
})

module.exports = router;

