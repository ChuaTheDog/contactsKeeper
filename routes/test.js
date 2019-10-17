const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator/check');

const User = require('../models/User');
const Contact = require('../models/Contact');

// @route     GET api/test
// @desc      Get all users contacts
router.get('/', async (req, res) => {
	console.log('test');
});

module.exports = router;
