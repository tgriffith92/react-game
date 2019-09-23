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
const GameSchema = new mongoose.Schema({
  color: String,
  level: Number
})

/* Step 3
 *
 * TODO: create collection API
 * NOTE: skip this if you are not using mongoose
 *
 */
const GameCollection = mongoose.model('Game', GameSchema)

/* Step 4
 *
 *
 */


const getGameById = (gameId) => {

  return GameCollection.findById(gameId)
}

const addGame = (game) => {
  
  return GameCollection.create(game)
}

/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  getGameById,
  addGame
}
