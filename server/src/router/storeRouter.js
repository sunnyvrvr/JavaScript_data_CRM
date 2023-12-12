const express = require('express');
const router = express.Router();
const storeController = require('../controller/storeController');

// /api/stores 경로에 대한 GET 요청 처리를 storeController로 연결
router.get('/api/stores', storeController.stores);

module.exports = router;
