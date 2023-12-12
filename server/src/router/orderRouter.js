const express = require('express');
const router = express.Router();
const orderController = require('../controller/orderController');

// /api/orders 경로에 대한 GET 요청 처리를 orderController로 연결
router.get('/api/orders', orderController.orders);

module.exports = router;
