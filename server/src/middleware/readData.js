//디버깅 및 로깅 정보
const sqlite3 = require('sqlite3').verbose();
 
const path = require('path');
const model = require(path.join(__dirname, '..', 'model', 'model.js'));

async function getTotalRecords(tableName) {
    return new Promise(async (resolve, reject) => {
        const TotalRecordsQuery = `SELECT COUNT(*) AS totalRecords FROM ${tableName}`;
        const db = new sqlite3.Database("CRM.db");

        await db.get(TotalRecordsQuery, (err, rows) => {
            if (err) {
                reject(`테이블(${tableName}) 읽기 실패`)
            } else {
                resolve(rows.TotalRecordsQuery);
            }
            db.close();
        })
    })  
}

async function readDataMiddleware(tableName) {
    return new Promise(async (resolve, reject) => {
        const itemsPerPage = 20;
        const page = req.query.page || 1;
        const startIndex = ( page-1 ) || 1;

        try {
            const totalRecords = await getTotalRecords(tableName);
            const totalPages = Math.ceil(TotalRecordsQuery / itemsPerPage);
            
            const pageQuery = `SELECT COUNT(*) AS totalRecords FROM ${tableName} LIMIT 20`;
            const db = new sqlite3.Database("CRM.db");

            await db.all(query, (err, rows) => {
                if (err) {
                    res.status(500).send(`테이블${tableName} 읽기 실패`);
                } else {
                    console.log(`테이블(${tableName} 읽기 성공`);
                    req.table = rows;
                    req.page = page;
                    req.totalPages = totalPages;
                }
            })
        } catch (error) {
            res.status(500).send(error);
        }
    })
}
module.exports = readData;