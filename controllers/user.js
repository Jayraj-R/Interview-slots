const User = require('../models/user_model');

exports.getAllUsers = (req, res) => {
	User.find()
		.then((user) => res.json(user))
		.catch((err) =>
			res.status(404).json({ message: 'User not found', error: err.message })
		);
};

exports.createUser = (req, res) => {
	User.create(req.body)
		.then((data) => res.json({ message: 'User added successfully', data }))
		.catch((err) =>
			res
				.status(400)
				.json({ message: 'Failed to create an user', error: err.message })
		);
};

exports.updateUser = (req, res) => {
	// console.log(req, res, '--------------------------');
	User.findByIdAndUpdate(req.params.id, req.body)
		.then((data) => res.json({ message: 'updated successfully!', data }))
		.catch((err) =>
			res
				.status(400)
				.json({ message: 'Failed to update User', error: err.message })
		);
};

exports.deleteUser = (req, res) => {
	User.findByIdAndRemove(req.params.id, req.body)
		.then((data) => res.json({ message: 'User deleted successfully', data }))
		.catch((err) =>
			res.status(404).json({ message: 'User not found', error: err.message })
		);
};
