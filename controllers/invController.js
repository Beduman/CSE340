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
  })
}

/*
  Build detailed inventory view
*/
invCont.buildByInventoryId = async function (req, res, next) {
  const inventory_id = req.params.inventory_id
  const data = await invModel.getInventoryByInventoryId(inventory_id)
  const grid = await utilities.buildDetailView(data)
  let nav = await utilities.getNav()
  res.render("./inventory/classification", {
    title: className + " vehicles",
    nav,
    grid,
  })
}
module.exports = invCont
