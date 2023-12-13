const express = require("express")
const router = express.Router()
const {getContact} = require('../controller/contactController')
const {createContact}=require('../controller/contactController')
const {getContactForId}= require('../controller/contactController')
const {updateContact}= require('../controller/contactController')
const {deleteContact}= require('../controller/contactController')

router.route("/").get(getContact).post(createContact)
router.route("/:id").get(getContactForId).put(updateContact).delete(deleteContact)


module.exports=router;