const express = require('express');
const router = express.Router();

// @route   GET api/contacts
// @desc    GET all users contacts user
// @access  private
router.get('/', (req, res) => {
	res.send('GET all users contacts user');
});

// @route   POST api/contacts
// @desc    Add a contact
// @access  private
router.post('/', (req, res) => {
	res.send('Add contact');
});

// @route   PUT api/contacts/:id
// @desc    Update a contact
// @access  private
router.put('/:id', (req, res) => {
	res.send('Update a concats');
});

// @route   PUT api/contacts/:id
// @desc    Update a contact
// @access  private
router.delete('/:id', (req, res) => {
	res.send('delete a concats');
});

module.exports = router;
