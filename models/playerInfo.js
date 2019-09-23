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
const PlayerInfoSchema = new mongoose.Schema({
 name: String,
 score: String
})

/* Step 3
 *
 * TODO: create collection API
 * NOTE: skip this if you are not using mongoose
 *
 */
const PlayerCollection = mongoose.model('Player', PlayerInfoSchema)

/* Step 4
 *
 *
 */

const getPlayerInfo =  () => {
  console.log('test')
    PlayerCollection.find();
}

const addPlayerInfo = () => {
    console.log('add player')
  return PlayerCollection.create({
    name: "",
    score: 0
  })
}

/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  getPlayerInfo,
  addPlayerInfo
}
