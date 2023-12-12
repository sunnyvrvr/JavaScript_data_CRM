// userRouter.js
const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

router.get('/api/users', userController.users);

module.exports = router;
