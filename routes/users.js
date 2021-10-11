const router = require('express').Router();
const UserController = require('../controllers/UserController');

router.post('/',UserController.register);
router.get('/',UserController.getAll);

module.exports = router;
