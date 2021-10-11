const router = require('express').Router();
const UserController = require('../controllers/UserController');

router.post('/register',UserController.register);
router.post('/login',UserController.login);
router.get('/',UserController.getAll);
router.get('/:username',UserController.getByName);

module.exports = router;
