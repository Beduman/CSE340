const utilities = require('../utilities')
const accountModel = require('../models/account-model')
const bcrypt = require("bcryptjs")

async function buildInventory(req, res, next) {
    let nav = await utilities.getNav()
    res.render("./inventory/management", {
      title: "Manegement",
      nav,
      errors:null,
    })
  }

module.exports = {buildInventory}