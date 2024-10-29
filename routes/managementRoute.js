const express = require("express")
const router = new express.Router() 
const utilities = require("../utilities/index")
const regValidate = require('../utilities/account-validation')
const managementController = require("../controllers/managementController")

//route to add classification and inventory
router.get("/classification", utilities.handleErrors(managementController.buildInventory));

module.exports = router;