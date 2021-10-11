const router = require('express').Router();
const UserController = require('../controllers/UserController');
const auth = require('../middleware/auth');

router.post('/register',UserController.register);
router.post('/login',UserController.login);
router.get('/',auth, UserController.getAll);
router.get('/:username',auth,UserController.getByName);
router.delete('/:username',auth,UserController.delete);
router.put('/:email',UserController.update);

module.exports = router;
