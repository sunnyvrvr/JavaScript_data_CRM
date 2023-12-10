
const userController = (req, res) => {
    const users = req.table;
    res.json({ users });
}

const itemController = (req, res) => {
    const items = req.table;
    res.json({ items });
}

const storeController = (req, res) => {
    const stores = req.table;
    res.json({ stores });
}

const orderController = (req, res) => {
    const orders = req.table;
    res.json({ orders });
}

const orderItemController = (req, res) => {
    const orderItems = req.table;
    res.json({ orderItems });
}

module.exports = {
    users: userController,
    items: itemController,
    stores: storeController,
    orders: orderController,       
    orderItems: orderItemController
}
