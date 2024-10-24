const invModel = require("../models/inventory-model")
const utilities = require("../utilities")

const invCont = {}

/* ***************************
 *  Build inventory by classification view
 * ************************** */
invCont.buildByClassificationId = async function (req, res, next) {
  const classification_id = req.params.classificationId
  const data = await invModel.getInventoryByClassificationId(classification_id)
  const grid = await utilities.buildClassificationGrid(data)
  let nav = await utilities.getNav()
  const className = data[0].classification_name
  res.render("./inventory/classification", {
    title: className + " vehicles",
    nav,
    grid,
    errors:null,
  })
}

/*
  Build detailed inventory view
*/
/*
  Build detailed inventory view
*/
invCont.buildByInventoryId = async function (req, res, next) {
  try {
    const inventory_id = req.params.inv_id
    const vehicle = await invModel.getInventoryByInventoryId(inventory_id)
    const grid = await utilities.buildDetailView(vehicle)
    let nav = await utilities.getNav()
    const vehicleName = `${vehicle.inv_make}, ${vehicle.inv_model}`
    res.render("./inventory/inventory", {
      title: vehicleName,
      nav,
      grid,
      errors: null,
    })
  }
  catch (error) {
    console.error(error, ' Error with inventory')
    next(error);
  }
}

//error view

invCont.buildError = async function (req, res, next) {
  try {
    let nav = await utilities.getNav()
    res.render("./error/error", {
      title: "Management",
      nav,
      errors: null,
    })
  }
  catch (error) {
    console.error(error, ' Error')
    next(error);
  }
}


//management view

invCont.buildManagement = async function (req, res, next) {
  try {
    let nav = await utilities.getNav()
    res.render("./inventory/management", {
      title: "Management",
      nav,
      errors: null,
    })
  }
  catch (error) {
    console.error(error, ' Error with management')
    next(error);
  }
}

invCont.buildClassificationManager = async function (req, res, next) {
  try {
    let nav = await utilities.getNav()
    res.render("./inventory/add-classification", {
      title: "Management",
      nav,
      errors: null,
    })
  }
  catch (error) {
    console.error(error, ' Error with management')
    next(error);
  }
}

invCont.buildInventoryManager = async function (req, res, next) {
  try {
    let nav = await utilities.getNav()
    res.render("./inventory/add-inventory", {
      title: "Management",
      nav,
      errors: null,
    })
  }
  catch (error) {
    console.error(error, ' Error with management')
    next(error);
  }
}

/* ****************************************
*  Process Registration
* *************************************** */
async function registerAccount(req, res) {
  let nav = await utilities.getNav()
  const { account_firstname, account_lastname, account_email, account_password } = req.body

  const regResult = await accountModel.registerClassification(
    classification_name
  )

  if (regResult) {
    req.flash(
      "notice",
      `Congratulations, you\'re registered ${classification_name}. Please log in.`
    )
    res.status(201).render("inventory/add-classification", {
      title: "Success",
      nav,
    })
  } else {
    req.flash("notice", "Sorry, the registration failed.")
    res.status(501).render("inventory/add-classification", {
      title: "Classification Registration",
      nav,
    })
  }
}


module.exports = invCont