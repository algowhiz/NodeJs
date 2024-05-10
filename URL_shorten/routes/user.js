const express = require('express')
const {handelSignUp,handelLogin} = require('../controllers/user');

const router = express.Router();

router.post('/',handelSignUp);
router.post('/login',handelLogin);

module.exports = router;