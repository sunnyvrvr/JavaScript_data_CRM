const itemController = (req, res) => {
    const items = req.table;
    res.json({ items });
}


module.exports = {
    items: itemController
}
