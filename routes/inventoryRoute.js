// Needed Resources 
const express = require("express")
const router = new express.Router() 
const utilities = require("../utilities/index")
const invController = require("../controllers/invController");

// Route to build inventory by classification view
router.get("/type/:classificationId", utilities.handleErrors(invController.buildByClassificationId));

//route to build inventory detail view
router.get("/detail/:inv_id", utilities.handleErrors(invController.buildByInventoryId));

//management view
router.get("/", utilities.handleErrors(invController.buildManagement));

router.get("/addClassification", utilities.handleErrors(invController.buildClassificationManager));

router.get("/addInventory", utilities.handleErrors(invController.buildInvetoryManager));

router.get("/error", utilities.handleErrors(invController.buildError));

module.exports = router;

