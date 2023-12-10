const sqlite3 = require('sqlite3');
const path = require('path');

const dbPath = path.join(__dirname, 'CRM.db');
const db = new sqlite3.Database(dbPath);


class Model {
    constructor(tableName) {
        this.tableName = tableName;
        this.db = new sqlite3.Database(dbPath);
    }
    executeQuery(query, params = []){
        return new Promise((resolve, reject) => {
            this.db.run(query, params, (err, row) => {
                if (err) {
                    reject(err);
                } else {
                    console.log('쿼리 실행:', query);
                    resolve(row);
                }
            });
        });
    }
    closeConnection() {
        this.db.close();
    }
}

class User extends Model {
    constructor() {
        super('user')
    }

    getAll() {
        const query = 'SELECT * FROM ${this.tableName}';
        return this.executeQuery(query);
    }
}

class Item extends Model {
    constructor() {
        super('item')
    }

    getAll() {
        const query = 'SELECT * FROM ${this.tableName}';
        return this.executeQuery(query);
    }
}

class Store extends Model {
    constructor() {
        super('store')
    }

    getAll() {
        const query = 'SELECT * FROM ${this.tableName}';
        return this.executeQuery(query);
    }
}

class Order extends Model {
    constructor() {
        super('order')
    }

    getAll() {
        const query = 'SELECT * FROM ${this.tableName}';
        return this.executeQuery(query);
    }
}

class OrderItem extends Model {
    constructor() {
        super('orderitem')
    }

    getAll() {
        const query = 'SELECT * FROM ${this.tableName}';
        return this.executeQuery(query);
    }
}

module.exports = { User, Item, Store, Order, OrderItem };