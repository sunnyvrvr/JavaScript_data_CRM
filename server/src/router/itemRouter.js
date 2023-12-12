const express = require('express');
const router = express.Router();
const itemController = require('../controller/itemController');

// /api/items 경로에 대한 GET 요청 처리를 itemController로 연결
router.get('/api/items', itemController.items);

module.exports = router;
