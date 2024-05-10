const express = require('express');

const {handelShortURL} = require('../controllers/url');

const router = express.Router();

router.post('/',handelShortURL);

module.exports = router;