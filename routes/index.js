const {Router} = require ('express')

const router = Router();

router.use('/todos', require('./products.route'))
router.use('/categories', require('./categories.route'))