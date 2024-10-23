// Needed Resources 
const express = require("express")
const router = new express.Router() 
const utilities = require("../utilities/index")
const invController = require("../controllers/invController");
const managementController = require("../controllers/managementController");

// Route to build inventory by classification view
router.get("/type/:classificationId", utilities.handleErrors(invController.buildByClassificationId));

//route to build inventory detail view
router.get("/detail/:inventoryId", utilities.handleErrors(invController.buildByInventoryId));

//management view
router.get("/inv", utilities.handleErrors(managementController.buildInventory));
router.get("/inventory", utilities.handleErrors(managementController.buildInventory));

module.exports = router;

