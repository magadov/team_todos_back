const Todo = require("../models/Todo.model");

module.exports.todosController = {
  addTodo: async (req, res) => {
    try {
      const todo = await Todo.create({
        text:req.body.text,
      });
      console.log('Добавлено')
      res.json(todo)
    }catch (e) {
      console.log(e.message)
    }
  },
  getTodos: async (req, res) => {
    try {
      const todos = await Todo.find();
      res.json(todos);
    }catch (e) {
      console.log(e.message)
    }
  },
  deleteTodos: async (req, res) => {
    try {
      await Todo.findByIdAndDelete(req.params.id)
      res.json('Удалено');
    }catch (e) {
      res.json(e.message)
    }
  },
  editTodos: async (req, res) => {
    const { text, status, category } = req.body;
    try {
      await Todo.findByIdAndUpdate(
        req.params.id,
        {
          text,
          status,
          category
        },
        {
          new: true,
        }
      );
      res.json('Изменено')
    }catch (e) {
      res.json(e.message)
    }
  }

}