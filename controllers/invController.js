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
async function registerClassification(req, res) {
  let nav = await utilities.getNav()
  const { classification_name } = req.body

  const regResult = await invModel.registerClassification(
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

async function registerInventory(req, res) {
  let nav = await utilities.getNav()
  const { inv_make, inv_model } = req.body

  const regResult = await invModel.registerInventory(
    inventory_name
  )

  if (regResult) {
    req.flash(
      "notice",
      `Congratulations, you\'re registered ${inventory_name}. Please log in.`
    )
    res.status(201).render("inventory/add-Inventory", {
      title: "Success",
      nav,
    })
  } else {
    req.flash("notice", "Sorry, the registration failed.")
    res.status(501).render("inventory/add-inventory", {
      title: "Inventory Registration",
      nav,
    })
  }
}


module.exports = invCont