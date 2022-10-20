const Interview = require('../models/interview_model');

exports.getAllInterview = (req, res) => {
	Interview.find()
		.then((interview) => res.json(interview))
		.catch((err) =>
			res
				.status(404)
				.json({ message: 'Interview not found', error: err.message })
		);
};

// USING PAGINATION
exports.getAllInterview = (req, res) => {
	Interview.find()
		.limit(req.query.limit * 1)
		.skip((req.query.page - 1) * req.query.limit)
		.exec()
		.then((interview) => {
			res.json(interview);
			console.log(interview);
		})
		.catch((err) =>
			res
				.status(404)
				.json({ message: 'Interview not found', error: err.message })
		);
};

exports.getInterviewByEmail = (req, res) => {
	Interview.find({
		'participants.email': {
			$in: req.query.email,
		},
	})
		.then((interview) => res.json(interview))
		.catch((err) =>
			res
				.status(404)
				.json({ message: 'Interview not found', error: err.message })
		);
};

exports.createInterview = (req, res) => {
	Interview.create(req.body)
		.then((data) => res.json({ message: 'Interview added successfully', data }))
		.catch((err) =>
			res
				.status(400)
				.json({ message: 'Failed to create an interview', error: err.message })
		);
};

exports.updateInterview = (req, res) => {
	// console.log(req, res, '--------------------------');
	Interview.findByIdAndUpdate(req.params.id, req.body)
		.then((data) => res.json({ message: 'updated successfully!', data }))
		.catch((err) =>
			res
				.status(400)
				.json({ message: 'Failed to update interview', error: err.message })
		);
};

exports.deleteInterview = (req, res) => {
	Interview.findByIdAndRemove(req.params.id, req.body)
		.then((data) =>
			res.json({ message: 'Interview deleted successfully', data })
		)
		.catch((err) =>
			res
				.status(404)
				.json({ message: 'Interview not found', error: err.message })
		);
};
