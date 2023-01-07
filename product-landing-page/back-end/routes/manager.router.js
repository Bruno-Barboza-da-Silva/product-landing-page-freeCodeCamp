const { Router } = require('express');
const managerController = require('../controllers/managerController');

const router = Router();

router.get('/', managerController.index);

module.exports = router;