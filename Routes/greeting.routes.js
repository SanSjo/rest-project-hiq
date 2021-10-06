const express = require('express');
const greetingController = require('../Controller/greeting.controller');
const router = express.Router();

router.get('/greetings', greetingController.getGreeting);
router.post('/greetings', greetingController.postGreeting);

module.exports = router;