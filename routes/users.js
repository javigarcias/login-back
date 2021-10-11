const router = require('express').Router();
const UserController = require('../controllers/UserController');
const auth = require('../middleware/auth');

router.post('/register',UserController.register);
router.post('/login',UserController.login);
router.put('/:email',UserController.update);
//Rutas protejidas con token
router.get('/',auth, UserController.getAll);
router.get('/:username',auth,UserController.getByName);
router.delete('/:username',auth,UserController.delete);

module.exports = router;
