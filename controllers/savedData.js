/* Step 1 import express
 *
 */
const express = require('express')

/* Step 2
 *
 * Import the api files from the models
 *
 * TODO: change the file path to the models file you'll need to use.
 * TODO: rename this from `templateApi` to something more sensible (e.g:
 * `shopsAPI`)
 *
 * NOTE: You may need to import more than one API to create the 
 * controller you need.
 * 
 */
const saveApi = require('../models/savedData.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const saveRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

saveRouter.get('/:saveId', (req, res) => {
    saveApi.getSavedData(req.params.saveId)
        .then((singleSave) => {
            res.send(singleSave)
        })
})

saveRouter.post('/', (req, res) => {
    saveApi.addSaveData(req.body)
        .then(newSave => res.send(newSave))
})

saveRouter.delete('/:saveId', (req, res) => {
    saveApi.deleteSave(req.params.saveId)
        .then(() => {
            res.sendStatus(200)
        })
})

/* Step 5
 *
 * Export the router from the file.
 *
 */
module.exports = {
    saveRouter
}
