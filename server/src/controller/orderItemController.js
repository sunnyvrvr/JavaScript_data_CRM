const orderItemController = (req, res) => {
    const orderItems = req.table;
    res.json({ orderItems });
}

module.exports = {     
    orderItems: orderItemController
}
