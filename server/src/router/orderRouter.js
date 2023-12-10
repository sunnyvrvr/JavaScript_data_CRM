const express = require('express');
const router = express.Router();
const mainController = require('../controller/mainController');

// /api/orders 경로에 대한 GET 요청 처리를 orderController로 연결
router.get('/api/orders', mainController.orders);

module.exports = router;
