const { Router } = require('express');
const managerController = require('../controllers/managerController');

const router = Router();

router.get('/', managerController.index);
router.put('/', managerController.update);
router.delete('/:id', managerController.delete);

module.exports = router;