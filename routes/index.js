const {Router} = require ('express')

const router = Router();

router.use('/todos', require('./todos.route'))
router.use('/categories', require('./categories.route'))

module.exports = router;