// Needed Resources 
const express = require("express")
const router = new express.Router() 
const utilities = require("../utilities/index")
const regValidate = require('../utilities/account-validation')
const accountController = require("../controllers/accountController")

router.get("/login", utilities.handleErrors(accountController.buildLogin));

router.get("/register", utilities.handleErrors(accountController.buildRegister));

router.post('/register', regValidate.registationRules(), regValidate.checkRegData, utilities.handleErrors(accountController.registerAccount))

router.post('/', utilities.handleErrors(accountController.getAccountByEmail));

// Process the login attempt
router.post(
    "/login",

    utilities.handleErrors(accountController.accountLogin)
  )

module.exports = router;
