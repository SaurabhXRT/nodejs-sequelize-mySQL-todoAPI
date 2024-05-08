const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todoController");

router.get("/", (req, res) => {
    res.send("Server is running");
});

router.get("/todos", todoController.getAllTodos);
router.post("/todos", todoController.createTodo);
router.delete("/todos/:id", todoController.deleteTodo);
router.put("/todos/:id", todoController.updateTodo);

module.exports = router;
