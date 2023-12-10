const express = require('express');
const router = express.Router();
const mainController = require('../controller/mainController');

// /api/stores 경로에 대한 GET 요청 처리를 storeController로 연결
router.get('/api/stores', mainController.stores);

module.exports = router;
