const { Router } = require('express');
const contactController = require('../controllers/contactController');

const router = Router();

router.post('/', contactController.index);

module.exports = router;