const router = require('express').Router();
const UserController = require('../controllers/UserController');

router.post('/register',UserController.register);
router.post('/login',UserController.login);
router.get('/',UserController.getAll);
router.get('/:username',UserController.getByName);
router.delete('/:username',UserController.delete);
router.put('/:email',UserController.update);

module.exports = router;
