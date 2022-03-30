const { Router } = require('express')

const userController = require('./controllers/userController')

const router = Router();

router.post('/user/add', userController.create)
router.get('/user', userController.index)
router.put('/user/update/:id', userController.update)
router.delete('/user/delete/:id', userController.delete)

module.exports = router