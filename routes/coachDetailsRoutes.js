const express = require('express');
const router = express.Router();
const {
    getAllCoaches,
    getCoachById,
    createCoach,
    updateCoach,
    deleteCoach
} = require('../controllers/coachDetailsController');

router.get('/', getAllCoaches);
router.get('/:id', getCoachById);
router.post('/', createCoach);
router.put('/:id', updateCoach);
router.delete('/:id', deleteCoach);

module.exports = router;
