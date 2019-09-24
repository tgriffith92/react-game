/* 
 * Place all functions, classes, and/or DB schemas here for a single 
 * model.
 */

/* Step 1
 *
 * TODO: import mongoose connection
 * NOTE: skip this if you are not using mongoose
 *
 */
const mongoose = require('./connection.js')

/* Step 2
 *
 * TODO: create model schema 
 * NOTE: skip this if you are not using mongoose
 *
 */
const SavedDataSchema = new mongoose.Schema({
  name: String,
  score: 0
})

/* Step 3
 *
 * TODO: create collection API
 * NOTE: skip this if you are not using mongoose
 *
 */
const SavedDataCollection = mongoose.model('Save', SavedDataSchema)

/* Step 4
 *
 *
 */

const getSavedData = (saveId) => {

  return SavedDataCollection.findById(saveId)
}

const addSaveData = (player) => {
  
  return SavedDataCollection.create(save)
}

const deleteSave = (saveId) => {
  return SavedDataCollection.findByIdAndDelete(saveId)
}

/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  getSavedData,
  addSaveData,
  deleteSave
}
