const express = require('express');
const router = express.Router();
const mainController = require('../controller/mainController');

// /api/items 경로에 대한 GET 요청 처리를 itemController로 연결
router.get('/api/items', mainController.items);

module.exports = router;
