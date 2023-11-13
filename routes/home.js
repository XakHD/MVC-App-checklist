//handles initial GET Request for the homepage
//handles POST method request for adding a new task

const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home')

//add specific routes for specific tasks
router.get('/', homeController.getIndex) //read
router.post('/', homeController.createTask)  //create

module.exports = router 