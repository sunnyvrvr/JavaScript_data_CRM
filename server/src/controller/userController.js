const userController = (req, res) => {
    const users = req.table;
    res.json({ users });
}

module.exports = {
    users: userController
}
