const { Router } = require('express');
const updateController = require('../controllers/updateController');

const router = Router();

router.get('/:id', updateController.show);
router.put('/:id', updateController.update);

module.exports = router;