const express = require('express');
const { handelUserSignUp } = require('../controllers/user'); // Assuming handelUserSignUp is the callback function
const router = express.Router();

router.post('/', handelUserSignUp); // Make sure handelUserSignUp is properly defined

module.exports = router;
