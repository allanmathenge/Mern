const express = require('express');
const router = express.Router();
const userController = require('../controllers/usersControllers')

router.route('/')
    .get(userController.getAllUsers) //read
    .post(userController.createNewUser) //create
    .patch(userController.UpdateUser) //update
    .delete(userController.deleteUser) //delete

module.exports = router