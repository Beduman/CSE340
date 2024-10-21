// Needed Resources 
const express = require("express")
const router = new express.Router() 
const utility = require("../utilities/index")
const accountController = require("../controllers/accountController")

router.get("/type/:accountId", accountController.buildLogin);


module.exports = router;
