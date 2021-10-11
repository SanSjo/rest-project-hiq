const express = require('express');
const greetingController = require('../Controller/greeting.controller');
const router = express.Router();

router.get('/greetings', greetingController.getAllGreetings);
router.get('/greetings/:_id', greetingController.getGreeting);
router.post('/greetings', greetingController.postGreeting);
router.put('/greetings/:_id', greetingController.modifyGreeting);

module.exports = router;