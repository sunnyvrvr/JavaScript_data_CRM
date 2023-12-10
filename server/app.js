const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const cors = require('cors');

const path = require('path');

const app = express();
// CORS 미들웨어 추가
app.use(cors());
const port = 3000;
const SUCCESS = 200;
const SERVER_ERROR = 500;
const NOT_FOUND= 404;

app.set('view engine', 'html');
const dbPath = require('path').resolve(__dirname, './src/model/CRM.db');
const db = new sqlite3.Database(dbPath);


//라우터 연결
const userRouter = require('./src/router/userRouter');
const itemRouter = require('./src/router/itemRouter');
const storeRouter = require('./src/router/storeRouter');
const orderRouter = require('./src/router/orderRouter');
const orderItemRouter = require('./src/router/orderItemRouter');

app.use('/api/users', userRouter);
app.use('/api/items', itemRouter);
app.use('/api/stores', storeRouter);
app.use('/api/orders', orderRouter);
app.use('/api/orderitems', orderItemRouter);

// 수정된 정적 파일 제공 코드
app.use(express.static(path.join(__dirname, '../client/public')));

// 프론트엔드로의 리다이렉션
app.get("/users", (req, res) => {
    res.redirect('/');
});

// 기존의 라우팅 코드
app.get('/users', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/public/users.html'));
});

app.get("/api/users", (req, res) => {
    const pageTitle = "사용자";
    const sql = "SELECT * FROM user";

    db.all(sql, [], (err, results) => {
        if (err) {
            console.error('Error executing SQLite3 query:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            // 결과를 JSON 형태로 반환
            res.json({ pageTitle, data: results });
        }
    });
});

// REST API 엔드포인트 - 아이템 정보 가져오기
app.get("/api/items", (req, res) => {
    const pageTitle = "상품";
    const sql = "SELECT * FROM item";

    db.all(sql, [], (err, results) => {
        if (err) {
            console.error('Error executing SQLite3 query:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            // 결과를 JSON 형태로 반환
            res.json({ pageTitle, data: results });
        }
    });
});

// REST API 엔드포인트 - 상점 정보 가져오기
app.get("/api/stores", (req, res) => {
    const pageTitle = "상점";
    const sql = "SELECT * FROM store";

    db.all(sql, [], (err, results) => {
        if (err) {
            console.error('Error executing SQLite3 query:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            // 결과를 JSON 형태로 반환
            res.json({ pageTitle, data: results });
        }
    });
});

// REST API 엔드포인트 - 주문 정보 가져오기
app.get("/api/orders", (req, res) => {
    const pageTitle = "주문";
    const sql = "SELECT * FROM `order`";

    db.all(sql, [], (err, results) => {
        if (err) {
            console.error('Error executing SQLite3 query:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            // 결과를 JSON 형태로 반환
            res.json({ pageTitle, data: results });
        }
    });
});

// REST API 엔드포인트 - 주문 정보 가져오기
app.get("/api/orderitems", (req, res) => {
    const pageTitle = "주문상품";
    const sql = "SELECT * FROM orderitem";

    db.all(sql, [], (err, results) => {
        if (err) {
            console.error('Error executing SQLite3 query:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            // 결과를 JSON 형태로 반환
            res.json({ pageTitle, data: results });
        }
    });
});

app.listen(port, () => {
  console.log(`서버 ${port} 준비`);
});
