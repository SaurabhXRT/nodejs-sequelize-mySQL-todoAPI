const Todo = require("../models/todo");
Todo.sync();

exports.getAllTodos = async (req, res) => {
    try {
        const todos = await Todo.findAll();
        res.json(todos);
    } catch (error) {
        console.error("Error fetching todos:", error);
        res.status(500).json({ error: "Failed to fetch todo items" });
    }
};

exports.createTodo = async (req, res) => {
    try {
        const { title, description } = req.body;
        const todo = await Todo.create({ title, description });
        console.log("Todo created");
        res.status(201).json(todo);
    } catch (error) {
        console.error("Error creating todo:", error);
        res.status(500).json({ error: "Failed to create todo item" });
    }
};

exports.deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await Todo.findByPk(id);

        if (!todo) {
            return res.status(404).json({ error: "Todo item not found" });
        }

        await todo.destroy();
        res.status(201).json({ message: "Todo deleted successfully" });
        console.log("Todo deleted successfully");
    } catch (error) {
        console.error("Error deleting todo:", error);
        res.status(500).json({ error: "Failed to delete todo item" });
    }
};

exports.updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, completed } = req.body;
        const todo = await Todo.findByPk(id);

        if (!todo) {
            return res.status(404).json({ error: "Todo item not found" });
        }

        if (completed === true && todo.completed !== true) {
            await todo.update({ completed: true });
            console.log("Todo updated as completed");
        }

        await todo.update({ title, description });
        res.json(todo);
        console.log("Todo updated");
    } catch (error) {
        console.error("Error updating todo:", error);
        res.status(500).json({ error: "Failed to update todo item" });
    }
};
