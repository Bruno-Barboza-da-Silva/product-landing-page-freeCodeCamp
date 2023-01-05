const { Router } = require('express');
const sendController = require('../controllers/sendContoller');

const router = Router();

router.get('/', sendController.index);

module.exports = router;