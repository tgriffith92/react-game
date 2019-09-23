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
const PlayerSchema = new mongoose.Schema({
 name: String,
 score: String
})

/* Step 3
 *
 * TODO: create collection API
 * NOTE: skip this if you are not using mongoose
 *
 */
const PlayerCollection = mongoose.model('Player', PlayerSchema)

/* Step 4
 *
 *
 */

const getPlayers =  () => {
  console.log('test')
   return PlayerCollection.find();
}

const getPlayer = (playerId) => {

  return PlayerCollection.findById(playerId)
}

const addPlayer = (player) => {
    console.log('add player')
  return PlayerCollection.create(player)
}

const deletePlayer = (playerId) => {
  return PlayerCollection.findByIdAndDelete(playerId)
}

/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  getPlayers,
  getPlayer,
  addPlayer,
  deletePlayer
}
