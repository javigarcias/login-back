const router = require('express').Router();
const EventController = require('../controllers/EventController');
const auth = require('../middleware/auth');

router.post('/create',auth,EventController.create);
router.put('/:id',auth,EventController.update);
router.get('/',auth, EventController.getAll);
router.delete('/:id',auth,EventController.delete);

module.exports = router;
