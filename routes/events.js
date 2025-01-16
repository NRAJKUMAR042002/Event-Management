const router = require('express').Router();
const { createEvent, getEvents } = require('../controllers/eventController');
const authMiddleware = require('../middleware/auth');

router.post('/', authMiddleware, createEvent);
router.get('/', getEvents);

module.exports = router;
