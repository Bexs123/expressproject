const router = require("express").Router();
const { addUser, editUser, getUsers, getUser, deleteUser } = require("../utils/user");

// /users
router.get("/", (req, res) => res.status(200).json(getUsers()));

router.post("/", (req, res) => {
    addUser(req.body);
    res.status(201).json({body: req.body});
});

// /users/1
router.get("/:id", (req, res) => res.status(200).json(getUser(req.params.id)));

router.put("/:id", (req, res) => {
    const user = {id: req.params.id, ...req.body};
    editUser(user, req.params.id);
    res.status(201).json({user});
});

router.delete("/:id", (req, res) => {
    deleteUser(req.params.id);
    res.status(200).json({msg: `Deleted User: ${req.params.id}`});
});

// /users/1/orders
router.get("/:id/orders", (req, res) => {
    try {
       res.status(200).json(getUser(req.params.id).orders);
    }
    catch (error) {
	res.status(404).json({msg: `user: ${req.params.id} not found`});
    }
});

// /users/1/orders/24
router.get("/:id/orders/:orderId", (req, res) => {
    try {
        const findOrder = (order) => order.id == req.params.orderId;
        res.status(200).json(getUser(req.params.id).orders.find(findOrder));
    } catch (error) {
	res.status(404).json({msg: `user: ${req.params.id} not found, or ${req.params.orderId} not found`});
    }
});

module.exports = router;