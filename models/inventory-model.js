const pool = require("../database/")

/* ***************************
 *  Get all classification data
 * ************************** */
async function getClassifications(){
  return await pool.query("SELECT * FROM public.classification ORDER BY classification_name")
}


/* ***************************
 *  Get all inventory items and classification_name by classification_id
 * ************************** */
async function getInventoryByClassificationId(classification_id) {
  try {
    const data = await pool.query(
      `SELECT * FROM public.inventory AS i 
      JOIN public.classification AS c 
      ON i.classification_id = c.classification_id 
      WHERE i.classification_id = $1`,
      [classification_id]
    )
    return data.rows
  } catch (error) {
    console.error("getclassificationsbyid error " + error)
  }
}


//detailed view code

async function getInventoryByInventoryId(inv_id) {
  try {
    const data = await pool.query(
      `SELECT * FROM public.inventory AS i 
      JOIN public.classification AS c
      ON i.classification_id = c.classification_id
      WHERE i.inv_id = $1`,
      [inv_id]
    )
    return data.rows[0]
  } catch (error) {
    console.error("getinventorybyid error " + error)
  }
}

async function registerClassification(classification_name){
  try {
    const sql = "INSERT INTO classification (classification_name) VALUES ($1, $2, $3, $4, 'Client') RETURNING *"
    return await pool.query(sql, [classification_name])
  } catch (error) {
    return error.message
  }
}

async function registerInventory(inv_make, inv_model){
  try {
    const sql = "INSERT INTO inventory (inv_name, inv_model) VALUES ($1, $2, $3, $4, 'Client') RETURNING *"
    return await pool.query(sql, [inv_make, inv_model])
  } catch (error) {
    return error.message
  }
}



module.exports = {getClassifications, getInventoryByClassificationId, getInventoryByInventoryId, registerClassification, registerInventory}