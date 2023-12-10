const express = require('express');
const router = express.Router();
const mainController = require('../controller/mainController');

// /api/users 경로에 대한 GET 요청 처리를 userController로 연결
router.get('/api/orderitems', mainController.orderItems);

module.exports = router;
