const express = require('express');
const router = express.Router();
const orderItemController = require('../controller/orderItemController');

// /api/users 경로에 대한 GET 요청 처리를 orderitemController로 연결
router.get('/api/orderitems', orderItemController.orderItems);

module.exports = router;
