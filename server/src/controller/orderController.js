const orderController = (req, res) => {
    const orders = req.table;
    res.json({ orders });
}

module.exports = {
    orders: orderController       
}
