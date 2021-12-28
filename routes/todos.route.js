const {Router} = require('express')
const {todosController} = require('../controllers/todos.controller')

const router = Router();

router.post('/', todosController.addTodo)
router.get('/', todosController.getTodos)
router.delete('/:id', todosController.deleteTodos)
router.patch('/:id', todosController.editTodos)

module.exports = router;