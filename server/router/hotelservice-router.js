const express=require("express");
const router=express.Router();
const hotels=require("../Controller/hotel-controller");


router.route("/hotels").get(hotels);

module.exports=router;