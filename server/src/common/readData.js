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
                resolve(rows.totalRecords); //TotalRecordsQuery
            }
            db.close();
        })
    })  
}


async function readDataMiddleware(req, res, tableName) {
  try {
    const totalRecords = await getTotalRecords(tableName);

    req.totalRecords = totalRecords;
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports = getTotalRecords;  
module.exports = readDataMiddleware;