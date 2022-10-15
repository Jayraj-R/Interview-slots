const express = require('express');
const router = express.Router();

const {
	getAllUsers,
	createUser,
	updateUser,
	deleteUser,
} = require('../controllers/user');

/**
 * @route GET api/getAllUsers
 * @description fetch all the available users
 * @access public
 */
router.get('/', getAllUsers);

/**
 * @route post api/createUser
 * @description create a new user
 * @access public
 */
router.post('/', createUser);

/**
 * @route GET api/updateUser
 * @description UPdate an existing User
 * @access public
 */
router.put('/:id', updateUser);

/**
 * @route GET api/deleteUser
 * @description Delete the upcoming User
 * @access public
 */
router.delete('/:id', deleteUser);

module.exports = router;
