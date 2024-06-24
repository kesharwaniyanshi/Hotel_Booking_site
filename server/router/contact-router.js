const express=require('express');
const router=express.Router();
const contactForm=require("../Controller/contact-controller");
const messageSchema = require('../validators/contact-validators');
const validate=require("../middlewares/validator-middleware");



router.route("/contact").post(validate(messageSchema),contactForm);


module.exports=router;